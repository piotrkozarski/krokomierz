import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProgressColorHex, getProgressPercent } from './utils'

export default function StepsWidget({ device }) {
  const navigate = useNavigate()
  const percent = useMemo(() => getProgressPercent(device.today.steps, device.goal), [device])
  const color = useMemo(() => getProgressColorHex(percent), [percent])

  return (
    <button
      onClick={() => navigate(`/pedometer/${device.id}`)}
      aria-label="Otwórz szczegóły krokomierza"
      className="w-[70px] h-[70px] rounded-full bg-white shadow-md flex items-center justify-center border border-neutral-200 active:scale-[0.98] transition"
      style={{ borderColor: color, borderWidth: 2 }}
    >
      <span className="text-sm font-semibold">{device.today.steps}</span>
    </button>
  )
}


