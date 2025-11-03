export function getISODateToday() {
  const now = new Date()
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, '0')
  const d = String(now.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function readStepsHistoryFromStorage() {
  try {
    const raw = localStorage.getItem('steps:history')
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

export function writeStepsHistoryToStorage(historyMap) {
  try {
    localStorage.setItem('steps:history', JSON.stringify(historyMap || {}))
  } catch {
    // ignore
  }
}

export function getTodayTotalSteps(historyLike) {
  // Accept object map { 'YYYY-MM-DD': number } OR array [{ date, steps }]
  if (!historyLike) return 0
  const today = getISODateToday()
  if (Array.isArray(historyLike)) {
    const hit = historyLike.find((r) => r && r.date === today)
    return Number(hit?.steps || 0)
  }
  if (typeof historyLike === 'object') {
    return Number(historyLike[today] || 0)
  }
  return 0
}

export function mergeDeviceHistoryWithStorage(deviceHistoryArray) {
  const storage = readStepsHistoryFromStorage()
  // Convert array to map
  const map = {}
  if (Array.isArray(deviceHistoryArray)) {
    for (const r of deviceHistoryArray) {
      if (r && r.date) map[r.date] = Number(r.steps || 0)
    }
  }
  return { ...map, ...storage }
}

export function maybeSeedTodayDev() {
  const isDev = !!import.meta.env.DEV
  if (!isDev) return
  try {
    const seeded = localStorage.getItem('steps:seeded')
    if (seeded) return
    const map = readStepsHistoryFromStorage()
    const today = getISODateToday()
    if (!map[today]) {
      map[today] = 3456
      writeStepsHistoryToStorage(map)
    }
    localStorage.setItem('steps:seeded', '1')
  } catch {
    // ignore
  }
}


