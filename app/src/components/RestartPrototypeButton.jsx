import React from 'react'
import { useAppState } from '../state/AppStateProvider.jsx'

export default function RestartPrototypeButton() {
  const { resetApp } = useAppState()
  const onClick = () => {
    resetApp()
    // Safety reload if remount does not occur; will be skipped if unmounted by key change
    setTimeout(() => {
      try { window.location.reload() } catch {}
    }, 0)
  }
  return (
    <button
      onClick={onClick}
      className="bg-white border border-[#d8d8d8] rounded-[12px] px-3 py-2 text-[14px] text-black shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
    >
      Restart
    </button>
  )
}


