import React from 'react'
import { useAppState } from '../state/AppStateProvider.jsx'

const baseBtn =
  'bg-white border border-[#d8d8d8] rounded-[12px] px-3 py-2 text-[14px] cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.06)]'

export default function ViewModeToggle() {
  const { viewMode, setViewMode } = useAppState()

  return (
    <div className="flex items-center gap-2">
      <button
        className={`${baseBtn} ${viewMode === 'MVP' ? 'border-[#a3a3a3] bg-[#f6f6f6] font-semibold' : ''}`}
        onClick={() => setViewMode('MVP')}
      >
        MVP
      </button>
      <button
        className={`${baseBtn} ${viewMode === 'FULL' ? 'border-[#a3a3a3] bg-[#f6f6f6] font-semibold' : ''}`}
        onClick={() => setViewMode('FULL')}
      >
        Pełny
      </button>
    </div>
  )
}


