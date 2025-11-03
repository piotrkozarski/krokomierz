import { useEffect, useMemo, useState } from 'react'
import StepsHistoryChart from './StepsHistoryChart.jsx'
import { usePedometer } from '../pedometer/data/PedometerProvider.jsx'
import { mergeDeviceHistoryWithStorage, maybeSeedTodayDev } from './utils.js'
import { lastNDays } from '../pedometer/utils.js'
import { coerceSteps } from '@/utils/stepsCoerce.js'

export default function StepsHistoryPage() {
  const { devices } = usePedometer()
  const active = devices?.[0]
  const [mode, setMode] = useState('week')

  useEffect(() => { maybeSeedTodayDev() }, [])

  const historyMap = mergeDeviceHistoryWithStorage(active?.history)
  const historyArray = useMemo(() => Object.entries(historyMap)
    .map(([date, steps]) => ({ date, steps }))
    .sort((a, b) => (a.date < b.date ? 1 : -1)), [historyMap])

  const weekDataRaw = useMemo(() => {
    const days = lastNDays(historyArray, 7).reverse() // oldest -> newest
    const dayNames = ['Nd','Pn','Wt','Śr','Cz','Pt','Sb']
    return days.map(d => {
      const dt = new Date(d.date)
      const dow = dt.getDay()
      const label = dayNames[dow] === 'Nd' ? 'Nd' : dayNames[dow]
      const val = Number(d.steps || 0)
      return { label, value: val, muted: val === 0 }
    })
  }, [historyArray])

  const monthDataRaw = useMemo(() => {
    const days = lastNDays(historyArray, 31).reverse()
    return days.map(d => {
      const dt = new Date(d.date)
      const label = String(dt.getDate())
      const val = Number(d.steps || 0)
      return { label, value: val, muted: val === 0 }
    })
  }, [historyArray])

  const safeWeekData = useMemo(() => weekDataRaw.map(d => ({ ...d, value: coerceSteps(d.value) })), [weekDataRaw])
  const safeMonthData = useMemo(() => monthDataRaw.map(d => ({ ...d, value: coerceSteps(d.value) })), [monthDataRaw])

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <div className="px-4 pt-4 pb-2 text-center font-medium">Historia – {active?.name || ''}</div>
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="w-full bg-white rounded-xl shadow p-4">
          <div className="tabs mb-4">
            <button className={`tab ${mode==='week'?'tab--active':''}`} onClick={()=>setMode('week')}>Tydzień</button>
            <button className={`tab ${mode==='month'?'tab--active':''}`} onClick={()=>setMode('month')}>Miesiąc</button>
          </div>
          <StepsHistoryChart data={mode === 'week' ? safeWeekData : safeMonthData} mode={mode} />
        </div>
      </div>
    </div>
  )
}


