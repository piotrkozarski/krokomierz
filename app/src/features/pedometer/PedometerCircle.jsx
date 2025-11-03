import { useEffect, useMemo, useState } from 'react'
import { getProgressColorHex, getProgressPercent } from './utils'

export default function PedometerCircle({ steps, goal, size = 200, sizeMobile = 160 }) {
  const percent = useMemo(() => getProgressPercent(steps, goal), [steps, goal])
  const color = useMemo(() => getProgressColorHex(percent), [percent])
  const clamped = Math.min(percent, 1)
  const [effectiveSize, setEffectiveSize] = useState(size)

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 640px)') // >= sm
    const update = () => setEffectiveSize(mql.matches ? size : sizeMobile)
    update()
    mql.addEventListener?.('change', update)
    return () => mql.removeEventListener?.('change', update)
  }, [size, sizeMobile])

  const angle = clamped * 360
  const bg = `conic-gradient(${color} ${angle}deg, #E5E7EB 0deg)` // gray remainder

  return (
    <div className="w-full flex items-center justify-center py-6">
      <div
        className="rounded-full flex items-center justify-center shadow-lg"
        style={{ width: effectiveSize, height: effectiveSize, background: bg }}
      >
        <div className="rounded-full bg-white flex flex-col items-center justify-center" style={{ width: effectiveSize - 40, height: effectiveSize - 40 }}>
          <div className="text-3xl font-bold">{steps}</div>
          <div className="text-xs text-gray-500">cel {goal}</div>
        </div>
      </div>
    </div>
  )
}


