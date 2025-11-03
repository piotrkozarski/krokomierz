import React from 'react'
import { formatStepsShort, formatStepsLong, average } from '../../utils/stepsFormat.js'
import './StepsHistoryChart.css'

export default function StepsHistoryChart({ data = [], mode = 'week' }) {
  const values = data.map(d => Number(d.value || 0))
  const avg = average(values)
  const avgLabel = mode === 'week' ? 'Średnia tygodniowa:' : 'Średnia miesięczna:'
  const max = Math.max(1, ...values)
  const barsClass = mode === 'month' ? 'bars bars--scroll' : 'bars'

  return (
    <div className="steps-history">
      <div className={barsClass} role="list">
        {data.map((d, i) => {
          const h = Math.round((Math.max(0, d.value) / max) * 100)
          return (
            <div className="bar-wrap" role="listitem" key={i}>
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


