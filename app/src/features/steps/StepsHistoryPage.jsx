import { useEffect, useState } from 'react'
import HistoryChart from '../pedometer/HistoryChart.jsx'
import DayDetailModal from '../pedometer/DayDetailModal.jsx'
import { usePedometer } from '../pedometer/data/PedometerProvider.jsx'
import { mergeDeviceHistoryWithStorage, maybeSeedTodayDev } from './utils.js'

export default function StepsHistoryPage() {
  const { devices } = usePedometer()
  const active = devices?.[0]
  const [tab, setTab] = useState('week')
  const [selected, setSelected] = useState(null)

  useEffect(() => { maybeSeedTodayDev() }, [])

  const historyMap = mergeDeviceHistoryWithStorage(active?.history)
  const historyArray = Object.entries(historyMap)
    .map(([date, steps]) => ({ date, steps }))
    .sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <div className="px-4 pt-4 pb-2 text-center font-medium">Historia – {active?.name || ''}</div>
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="w-full bg-white rounded-xl shadow p-4">
          <div className="flex gap-2 mb-4">
            <button onClick={() => setTab('week')} className={`px-3 py-1 rounded ${tab==='week' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>Tydzień</button>
            <button onClick={() => setTab('month')} className={`px-3 py-1 rounded ${tab==='month' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>Miesiąc</button>
          </div>
          <HistoryChart
            history={historyArray}
            goal={active?.goal || 0}
            mode={tab === 'month' ? 'month' : 'week'}
            onSelectDay={(day) => setSelected(day)}
          />
          <div className="mt-4 divide-y border-t border-gray-100">
            {historyArray.map((r) => (
              <div key={r.date} className="flex items-center justify-between py-2 text-sm">
                <span>{r.date}</span>
                <span className="font-medium">{Number(r.steps || 0).toLocaleString('pl-PL')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <DayDetailModal open={!!selected} day={selected} goal={active?.goal || 0} onClose={() => setSelected(null)} />
    </div>
  )
}


