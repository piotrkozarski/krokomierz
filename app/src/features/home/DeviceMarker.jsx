import AvatarFallback from "../../components/AvatarFallback.jsx";

export default function DeviceMarker({ imgSrc }) {
  return (
    <div className="absolute top-[38%] left-[52%] -translate-x-1/2 -translate-y-1/2 z-20">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-md" />
        <div className="w-20 h-20 rounded-full bg-white shadow ring-4 ring-blue-300/50 flex items-center justify-center overflow-hidden">
          <AvatarFallback src={imgSrc} size={44} />
        </div>
      </div>
    </div>
  );
}


