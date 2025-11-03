export default function DayDetailModal({ open, day, goal, onClose }) {
  if (!open || !day) return null
  const percent = Math.round((day.steps / goal) * 100)
  return (
    <div className="absolute inset-0 bg-black/40 flex items-end z-50">
      <div className="w-full rounded-t-2xl bg-white p-4">
        <h2 className="text-lg font-semibold mb-1 text-center">Szczegóły dnia</h2>
        <div className="text-sm text-gray-600 mb-4 text-center">{day.date}</div>
        <div className="flex items-baseline gap-2 mb-2 justify-center">
          <div className="text-3xl font-bold">{day.steps}</div>
          <div className="text-gray-500">kroków</div>
        </div>
        <div className="text-sm text-gray-600 text-center">{percent}% celu ({goal})</div>
        <div className="mt-4">
          <button className="w-full h-11 rounded-xl bg-black text-white" onClick={onClose}>Zamknij</button>
        </div>
      </div>
    </div>
  )
}


