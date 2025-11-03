import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'

export const AppStateContext = createContext(null)

const initialState = {
  viewMode: 'MVP', // 'MVP' | 'FULL'
  appVersion: 1,
}

export function AppStateProvider({ children }) {
  const [state, setState] = useState(initialState)

  const setViewMode = useCallback((mode) => {
    setState((prev) => ({ ...prev, viewMode: mode === 'FULL' ? 'FULL' : 'MVP' }))
  }, [])

  const resetApp = useCallback(() => {
    try {
      const prefixes = ['krokomierz:', 'steps:']
      for (let i = localStorage.length - 1; i >= 0; i -= 1) {
        const key = localStorage.key(i)
        if (!key) continue
        if (prefixes.some((p) => key.startsWith(p))) {
          localStorage.removeItem(key)
        }
      }
    } catch (e) {
      // ignore storage errors in prototype
    }
    setState((prev) => ({ viewMode: 'MVP', appVersion: prev.appVersion + 1 }))
  }, [])

  const value = useMemo(() => ({ ...state, setViewMode, resetApp }), [state, setViewMode, resetApp])
  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>
}

export function useAppState() {
  const ctx = useContext(AppStateContext)
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider')
  return ctx
}

export { initialState }


