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

  const filledDays = cells.filter(c => !c.empty)
  const avgMonth = filledDays.length
    ? Math.round(filledDays.reduce((s,c)=> s + (Number(c.steps)||0), 0) / filledDays.length)
    : 0

  return (
    <div className="month-grid">
      {/* Nagłówki dni: Pn..Nd */}
      <div className="month-grid__head">
        {['Pn','Wt','Śr','Cz','Pt','Sb','Nd'].map((n) => (
          <div key={n} className="month-grid__head-cell">{n}</div>
        ))}
      </div>

      {/* Siatka dni */}
      <div className="month-grid__body">
        {cells.map((c) =>
          c.empty ? (
            <div key={c.key} className="day-tile day-tile--empty" />
          ) : (
            <div key={c.key} className="day-tile" title={`${c.iso}: ${formatStepsLong(c.steps)} kroków`}>
              <div className="day-tile__top">
                <span className="day-tile__day">{c.day}</span>
              </div>
              <div className="day-tile__value">{formatStepsShort(c.steps)}</div>
              {/* pasek celu był usunięty w MVP, zostaje wyłączony */}
            </div>
          )
        )}
      </div>

      {/* Karta średniej miesięcznej — styl identyczny jak tygodniowa */}
      <div className="avg-card">
        <span className="avg-title">Średnia miesięczna:</span>
        <strong className="avg-value">{formatStepsLong(avgMonth)} kroków</strong>
      </div>
    </div>
  )
}


