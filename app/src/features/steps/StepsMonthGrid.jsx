import React from 'react'
import { formatStepsShort, formatStepsLong } from '@/utils/stepsFormat'
import { sampleSteps } from '@/utils/stepsSample'
import './StepsMonthGrid.css'

export default function StepsMonthGrid({ year, month, historyMap = {}, startWeekOnMonday = true }) {
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDow = new Date(year, month, 1).getDay() // 0..6
  const offset = startWeekOnMonday ? (firstDow === 0 ? 6 : firstDow - 1) : firstDow

  const cells = []
  const totalCells = 42
  for (let i = 0; i < totalCells; i++) {
    const day = i - offset + 1
    if (day < 1 || day > daysInMonth) {
      cells.push({ empty: true, key: `e-${i}` })
      continue
    }
    const y = year
    const m = String(month + 1).padStart(2, '0')
    const d = String(day).padStart(2, '0')
    const iso = `${y}-${m}-${d}`
    let steps = Number(historyMap[iso] || 0)
    if (!steps) {
      const seed = Number(`${y}${m}${d}`)
      steps = sampleSteps(seed)
    }
    cells.push({ empty: false, day, iso, steps, key: iso })
  }

  return (
    <div className="month-grid">
      <div className="month-grid__head">
        {['Pn','Wt','Śr','Cz','Pt','Sb','Nd'].map((n) => (
          <div key={n} className="month-grid__head-cell">{n}</div>
        ))}
      </div>
      <div className="month-grid__body">
        {cells.map((c) => c.empty ? (
          <div key={c.key} className="day-tile day-tile--empty" />
        ) : (
          <div key={c.key} className="day-tile" title={`${c.iso}: ${formatStepsLong(c.steps)} kroków`}>
            <div className="day-tile__top">
              <span className="day-tile__day">{c.day}</span>
            </div>
            <div className="day-tile__value">{formatStepsShort(c.steps)}</div>
            <div className="day-tile__bar">
              <div className="day-tile__bar-fill" style={{ width: `${Math.min(100, Math.round((c.steps / 15000) * 100))}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


