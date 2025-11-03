import React, { createContext, useContext, useMemo, useState, useCallback } from 'react'
import rawData from '../../../mocks/pedometer.json'

const PedometerContext = createContext(null)

export function PedometerProvider({ children }) {
  const [devices, setDevices] = useState(rawData.devices)

  const updateGoal = useCallback((deviceId, newGoal) => {
    setDevices(prev => prev.map(d => d.id === deviceId ? { ...d, goal: Number(newGoal) } : d))
  }, [])

  const value = useMemo(() => ({ devices, updateGoal }), [devices, updateGoal])
  return (
    <PedometerContext.Provider value={value}>{children}</PedometerContext.Provider>
  )
}

export function usePedometer() {
  const ctx = useContext(PedometerContext)
  if (!ctx) throw new Error('usePedometer must be used within PedometerProvider')
  return ctx
}

export function findDevice(devices, deviceId) {
  return devices.find(d => d.id === deviceId) || devices[0]
}


