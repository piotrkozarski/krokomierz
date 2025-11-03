export function formatStepsShort(n) {
  if (n == null || isNaN(n)) return '0'
  const v = Number(n)
  if (v < 1000) return v.toString()
  if (v < 10000) return (v / 1000).toFixed(1).replace('.', ',') + 'k'
  return Math.round(v / 1000) + 'k'
}

export function formatStepsLong(n) {
  if (n == null || isNaN(n)) return '0'
  return Math.round(n).toLocaleString('pl-PL')
}

export function average(values) {
  const arr = (values || []).filter((x) => Number.isFinite(x))
  if (!arr.length) return 0
  return arr.reduce((a, b) => a + b, 0) / arr.length
}


