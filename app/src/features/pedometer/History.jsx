import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { usePedometer, findDevice } from './data/PedometerProvider'
import HistoryChart from './HistoryChart'
import DayDetailModal from './DayDetailModal'

export default function History() {
  const { deviceId } = useParams()
  const { devices } = usePedometer()
  const device = findDevice(devices, deviceId)
  const [tab, setTab] = useState('week')
  const [selected, setSelected] = useState(null)

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <div className="px-4 pt-4 pb-2 text-center font-medium">Historia – {device.name}</div>
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="w-full bg-white rounded-xl shadow p-4">
          <div className="flex gap-2 mb-4">
            <button onClick={() => setTab('week')} className={`px-3 py-1 rounded ${tab==='week' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>Tydzień</button>
            <button onClick={() => setTab('month')} className={`px-3 py-1 rounded ${tab==='month' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>Miesiąc</button>
          </div>
          <HistoryChart
            history={device.history}
            goal={device.goal}
            mode={tab === 'month' ? 'month' : 'week'}
            onSelectDay={(day) => setSelected(day)}
          />
          <div className="mt-4">
            <Link to={`/pedometer/${device.id}`} className="text-blue-600">← Szczegóły</Link>
          </div>
        </div>
      </div>
      <DayDetailModal open={!!selected} day={selected} goal={device.goal} onClose={() => setSelected(null)} />
    </div>
  )
}


