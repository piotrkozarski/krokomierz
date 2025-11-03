export function coerceSteps(v) {
  if (v == null) return 0;
  if (typeof v === 'number' && Number.isFinite(v)) return v;
  const s = String(v).trim().toLowerCase().replace(/\s/g, '');
  const withDot = s.replace(',', '.');
  if (withDot.endsWith('k')) {
    const n = parseFloat(withDot.slice(0, -1));
    return Number.isFinite(n) ? Math.round(n * 1000) : 0;
  }
  const n = parseFloat(withDot);
  return Number.isFinite(n) ? Math.round(n) : 0;
}


