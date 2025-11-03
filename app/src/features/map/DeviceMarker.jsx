import AvatarFallback from "../../components/AvatarFallback.jsx";

export default function DeviceMarker({ src = "/device.png" }) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
      <div className="rounded-full p-2 shadow-[0_8px_24px_rgba(0,0,0,0.12)]" style={{ boxShadow: '0 8px 24px rgba(0,0,0,.12)' }}>
        <div className="rounded-full" style={{ boxShadow: 'inset 0 0 0 3px rgba(62,131,255,.25)' }}>
          <div className="rounded-full bg-white p-2">
            <AvatarFallback src={src} size={44} />
          </div>
        </div>
      </div>
    </div>
  )
}


