import { ActivitySquare, CalendarDays, Locate, Phone, MoreHorizontal } from "lucide-react";

export default function BottomNav({ onMore }) {
  return (
    <nav className="absolute bottom-0 inset-x-0 z-30 bg-white">
      <div className="h-14 flex items-center justify-around text-[12px] text-white bg-[#C79B4B]">
        <div className="flex flex-col items-center gap-0.5"><ActivitySquare size={18}/>Karta zdrowia</div>
        <div className="flex flex-col items-center gap-0.5"><CalendarDays size={18}/>Historia</div>
        <div className="flex flex-col items-center gap-0.5"><Locate size={18}/>Lokalizuj</div>
        <div className="flex flex-col items-center gap-0.5"><Phone size={18}/>Zadzwoń</div>
        <button onClick={onMore} className="flex flex-col items-center gap-0.5"><MoreHorizontal size={18}/>Więcej</button>
      </div>
    </nav>
  );
}


