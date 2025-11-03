import { Routes, Route, Navigate } from 'react-router-dom'
import RestartPrototypeButton from './components/RestartPrototypeButton.jsx'
import ViewModeToggle from './components/ViewModeToggle.jsx'
import { useAppState } from './state/AppStateProvider.jsx'
import StepsHistoryPage from './features/steps/StepsHistoryPage.jsx'
import HomeMap from './features/home/HomeMap.jsx'
import PedometerDetail from './features/pedometer/PedometerDetail.jsx'
import History from './features/pedometer/History.jsx'
import { PedometerProvider } from './features/pedometer/data/PedometerProvider.jsx'

export default function App() {
  const params = new URLSearchParams(window.location.search)
  const showFrame = params.get('frame') !== '0'
  const { appVersion } = useAppState()

  return (
    <div className={`min-h-screen w-full flex items-center justify-center ${showFrame ? 'bg-neutral-900' : ''}`}>
      <div className="absolute top-4 left-0 right-0 flex items-center justify-end gap-2 px-4">
        <RestartPrototypeButton />
        <ViewModeToggle />
      </div>
      <div key={appVersion} className={`relative ${showFrame ? 'w-[390px] h-[844px] max-w-full bg-white rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden border border-neutral-800' : 'w-[390px] h-[844px]'}`}>
        <PedometerProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/map" replace />} />
            <Route path="/map" element={<HomeMap />} />
            <Route path="/pedometer/:deviceId" element={<PedometerDetail />} />
            <Route path="/history/:deviceId" element={<History />} />
            <Route path="/steps/history" element={<StepsHistoryPage />} />
            <Route path="*" element={<Navigate to="/map" replace />} />
          </Routes>
        </PedometerProvider>
      </div>
    </div>
  )
}


