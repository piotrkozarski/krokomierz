import { lastNDays } from './utils'

export default function HistoryChart({ history, goal = 0, mode = 'week', onSelectDay }) {
  const source = Array.isArray(history) ? history : []
  const days = (mode === 'month' ? lastNDays(source, 31) : lastNDays(source, 7))
  const hasData = days.some(d => d.steps > 0)
  const maxSteps = Math.max(goal || 0, ...days.map(d => d.steps || 0), 1)
  const barWidth = mode === 'month' ? 8 : 28
  const gap = mode === 'month' ? 4 : 8

  return (
    <div className="w-full">
      <div className="flex items-end" style={{ gap }}>
        {days.map((d, idx) => {
          const steps = d.steps || 0
          const h = Math.max(8, Math.round((steps / maxSteps) * 140))
          const aboveGoal = d.steps >= goal
          return (
            <button
              key={idx}
              title={`${d.date || ''}: ${steps}`}
              onClick={() => onSelectDay?.(d)}
              className="rounded-md"
              style={{ width: barWidth, height: h, backgroundColor: aboveGoal ? '#D4AF37' : '#93C5FD' }}
            />
          )
        })}
      </div>
      <div className="mt-2 text-xs text-gray-500">{mode === 'month' ? '31 dni' : '7 dni'}</div>
      {!hasData && (
        <div className="mt-2 text-sm text-gray-500">Brak danych z tego dnia</div>
      )}
    </div>
  )
}


