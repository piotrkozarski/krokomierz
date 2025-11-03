import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { usePedometer, findDevice } from './data/PedometerProvider'
import PedometerCircle from './PedometerCircle'
import GoalModal from './GoalModal'
import { averageLastNDays, bestRecord, currentStreak } from './utils'
import { useAppState } from '../../state/AppStateProvider.jsx'
import History from './History.jsx'
import { getTodayTotalSteps, mergeDeviceHistoryWithStorage } from '../steps/utils.js'
import { useNavigate } from 'react-router-dom'

export default function PedometerDetail() {
  const { deviceId } = useParams()
  const { devices, updateGoal } = usePedometer()
  const device = findDevice(devices, deviceId)
  const [goalOpen, setGoalOpen] = useState(false)
  const { viewMode } = useAppState()
  const navigate = useNavigate()

  const avg7 = useMemo(() => averageLastNDays(device.history, 7), [device])
  const record = useMemo(() => bestRecord(device.history), [device])
  const streak = useMemo(() => currentStreak(device.history, device.goal), [device])

  if (viewMode === 'MVP') {
    const merged = mergeDeviceHistoryWithStorage(device?.history)
    const totalToday = getTodayTotalSteps(merged)
    return (
      <section className="steps-mvp">
        <div className="today-center">
          <div className="today-card">
            <h2>Dzisiejsze kroki</h2>
            <div className="today-value">{Number(totalToday || 0).toLocaleString('pl-PL')}</div>
          </div>
        </div>
        <button className="history-btn" onClick={() => navigate('/steps/history')}>Historia</button>
      </section>
    )
  }

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <header className="px-4 pt-4 pb-2 text-center font-medium">Krokomierz</header>
      <div className="flex-1 overflow-y-auto px-4">
        <PedometerCircle steps={device.today.steps} goal={device.goal} size={200} sizeMobile={160} />
        <div className="w-full grid grid-cols-3 gap-3">
          <StatCard label="Śr. 7 dni" value={avg7} />
          <StatCard label="Rekord" value={record} />
          <StatCard label="Passa" value={`${streak} d.`} />
        </div>
      </div>
      <footer className="p-4 grid grid-cols-2 gap-3">
        <Link to={`/history/${device.id}`} className="h-11 rounded-xl bg-neutral-100 flex items-center justify-center">Historia</Link>
        <button className="h-11 rounded-xl bg-black text-white" onClick={() => setGoalOpen(true)}>Ustaw cel</button>
      </footer>
      <GoalModal
        open={goalOpen}
        initialGoal={device.goal}
        onClose={() => setGoalOpen(false)}
        onSave={(val) => { updateGoal(device.id, val); setGoalOpen(false) }}
      />
    </div>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 text-center">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  )
}


