import { Share2, Battery, Signal } from "lucide-react";
import AvatarFallback from "../../components/AvatarFallback.jsx";

export default function DeviceSheet({ name="BS03s_9854", minutesAgo="3 min temu", battery=67, signal=4 }) {
  return (
    <div className="absolute bottom-0 inset-x-0 z-30 pb-5">
      <div className="mx-3 mb-2">
        <div className="mx-auto mt-2 w-11 h-1 rounded-[2px] bg-[#E5E7EB]" />
      </div>
      <div className="mx-3 mb-3 rounded-2xl bg-white border border-[rgba(0,0,0,0.06)] shadow-[0_12px_28px_rgba(0,0,0,0.18)] p-3">
        <div className="flex gap-6">
          <button className="flex-1 h-9 rounded-full bg-amber-100 text-amber-900 text-sm">
            <span className="inline-block px-3 py-1">📍 Ustalanie lokalizacji…</span>
          </button>
          <button className="px-4 h-9 rounded-full bg-[#C79B4B] text-white text-sm flex items-center gap-2">
            <Share2 size={16}/> Udostępnij
          </button>
        </div>

        <div className="mt-3 flex items-start gap-3">
          <AvatarFallback src="/device.png" size={36} />
          <div className="flex-1">
            <div className="font-semibold">{name}</div>
            <div className="text-[13px] text-neutral-600 flex items-center gap-2">
              <span>{minutesAgo}</span>
              <span className="inline-flex items-center gap-1"><Signal size={14}/> {signal}</span>
              <span className="inline-flex items-center gap-1"><Battery size={14}/> {battery}%</span>
            </div>
            <div className="text-[13px] text-neutral-500 mt-1">Trwa lokalizowanie…</div>
          </div>
        </div>
      </div>
    </div>
  );
}


