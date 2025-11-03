import { useEffect, useState } from 'react'

export default function GoalModal({ open, initialGoal, onClose, onSave }) {
  const [value, setValue] = useState(initialGoal || 0)
  useEffect(() => { setValue(initialGoal || 0) }, [initialGoal])
  if (!open) return null
  return (
    <div className="absolute inset-0 bg-black/40 flex items-end z-50">
      <div className="w-full rounded-t-2xl bg-white p-4">
        <h2 className="text-lg font-semibold mb-4 text-center">Ustaw cel</h2>
        <label className="block text-sm text-gray-600 mb-1">Kroki dziennie</label>
        <input
          type="number"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring"
          value={value}
          onChange={e => setValue(Number(e.target.value))}
          min={0}
        />
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button className="h-11 rounded-xl bg-neutral-100" onClick={onClose}>Anuluj</button>
          <button className="h-11 rounded-xl bg-black text-white" onClick={() => onSave(value)}>Zapisz</button>
        </div>
      </div>
    </div>
  )
}


