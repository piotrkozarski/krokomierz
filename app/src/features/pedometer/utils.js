export function getProgressPercent(steps, goal) {
  if (!goal || goal <= 0) return 0
  return Math.min(steps / goal, 1.5) // cap for visuals
}

export function getProgressColorHex(percent) {
  if (percent < 0.75) return '#EF4444' // red
  if (percent < 1.0) return '#F59E0B' // orange
  return '#D4AF37' // gold
}

export function averageLastNDays(history, n) {
  const arr = history.slice(0, n) // assuming history[0] is latest
  if (!arr.length) return 0
  return Math.round(arr.reduce((s, d) => s + (d.steps || 0), 0) / arr.length)
}

export function bestRecord(history) {
  return history.reduce((max, d) => Math.max(max, d.steps || 0), 0)
}

export function currentStreak(history, goal) {
  let streak = 0
  for (const day of history) {
    if ((day.steps || 0) >= goal) streak += 1
    else break
  }
  return streak
}

export function lastNDays(history, n) {
  return history.slice(0, n).slice().reverse() // oldest to newest for chart
}


