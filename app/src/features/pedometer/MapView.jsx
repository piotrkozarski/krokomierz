import { Link } from 'react-router-dom'
import DeviceMarker from '../map/DeviceMarker.jsx'
import AvatarFallback from '../../components/AvatarFallback.jsx'
import StepsWidget from './StepsWidget'
import { usePedometer } from './data/PedometerProvider'

export default function MapView() {
  const { devices } = usePedometer()
  const active = devices[0]

  return (
    <div className="w-full h-full relative bg-[#F7F7F9] overflow-hidden">
      {/* Map placeholder with gradient + subtle dots */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(180deg, #f3f6fb 0%, #e9f0fa 100%)",
          backgroundSize: "20px 20px, 100% 100%",
          backgroundPosition: "0 0, 0 0"
        }}
      />

      {/* Steps widget top-center */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <StepsWidget device={active} />
      </div>

      {/* Centered device marker */}
      <DeviceMarker src={active?.avatar || '/device.png'} />

      {/* Safe avatar top-left overlay */}
      <div className="absolute top-3 left-3 z-10 overflow-visible">
        <AvatarFallback src={active?.avatar || '/device.png'} size={36} />
      </div>

      {/* Simple device shortcuts */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur rounded-xl shadow px-3 py-2 text-sm flex gap-3 z-20">
        {devices.map(d => (
          <Link key={d.id} to={`/pedometer/${d.id}`} className="text-blue-600 hover:underline">
            {d.name}
          </Link>
        ))}
      </div>
    </div>
  )
}


