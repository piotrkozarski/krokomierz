import React, { useEffect, useMemo, useRef } from 'react'
import { formatStepsShort, formatStepsLong, average } from '@/utils/stepsFormat'
import './StepsHistoryChart.css'

export default function StepsHistoryChart({ data = [], mode = 'week' }) {
  const values = useMemo(() => data.map(d => Number(d.value || 0)), [data])
  const max = useMemo(() => Math.max(1, ...values), [values])
  const avg = useMemo(() => average(values), [values])
  const avgLabel = mode === 'week' ? 'Średnia tygodniowa:' : 'Średnia miesięczna:'

  // dynamiczna szerokość kolumn w trybie miesięcznym (~8 w kadrze)
  const stripRef = useRef(null)
  useEffect(() => {
    if (mode !== 'month') return
    const el = stripRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const targetCols = 8
    const gap = 14
    const barMin = Math.max(30, Math.floor((rect.width - gap * (targetCols - 1)) / targetCols))
    el.style.setProperty('--bar-min', `${barMin}px`)
  }, [mode, data.length])

  const barsClass = mode === 'month' ? 'bars bars--scroll' : 'bars'

  return (
    <div className="steps-history">
      <div className={barsClass} ref={stripRef} role="list">
        {data.map((d, i) => {
          const h = Math.round((Math.max(0, d.value) / max) * 100)
          return (
            <div className={`bar-wrap ${d.today ? 'bar-wrap--today' : ''}`} role="listitem" key={i}>
              <span className="bar-label">{formatStepsShort(d.value)}</span>
              <div
                className={`bar ${d.muted ? 'bar--muted' : 'bar--active'}`}
                style={{ height: `${h}%` }}
                aria-label={`${d.label}: ${formatStepsLong(d.value)} kroków`}
                title={`${d.label}: ${formatStepsLong(d.value)} kroków`}
              />
              <span className="bar-x">{d.label}</span>
            </div>
          )
        })}
      </div>

      <div className="avg-card">
        <span className="avg-title">{avgLabel}</span>
        <strong className="avg-value">{formatStepsLong(avg)} kroków</strong>
      </div>
    </div>
  )
}


