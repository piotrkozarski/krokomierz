Krokomierz – Prototyp (React + Vite + Tailwind)

Uruchomienie lokalne:
- npm install
- npm run dev
- Otwórz: http://localhost:5173/map

Nawigacja:
- /map – Mapa z widżetem kroków (70×70, top-center)
- /pedometer/:deviceId – Szczegóły: duży okrąg, „Ustaw cel”, „Historia”, karty: średnia 7 dni, rekord, passa
- /history/:deviceId – Historia: Tydzień/Miesiąc (7/31 słupków) + modal dnia

Dane:
- Mocki: src/mocks/pedometer.json (cele: dziecko 8000, senior 3000, zwierzę 6000)
- Cel per urządzenie zmieniany w modal „Ustaw cel”

Źródła: ../docs/


## Deployment

1) Import repo w Vercel
- Ustaw Root Directory na `app`
- Framework Preset: Vite

2) Build settings
- Build Command: `npm run build`
- Output Directory: `dist`

3) SPA rewrites
- Upewnij się, że `app/vercel.json` istnieje z:
```
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

4) Preview deployments
- Włącz Preview dla PR-ów (domyślne w Vercel)

5) Opcjonalnie CLI
- `vercel --prod` z katalogu `app`


