import { Settings, MapPin, BookText, Users, Ban, AlarmClock, Navigation, Volume2, Headphones, Power, ActivitySquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MoreSheet({ open, onClose, deviceId }) {
  const navigate = useNavigate();
  if (!open) return null;
  const Item = ({ icon:Icon, label, onClick }) => (
    <button onClick={onClick} className="w-full flex items-center gap-4 p-4 text-left hover:bg-neutral-50">
      <Icon size={22} className="text-black"/>
      <span className="text-[16px]">{label}</span>
    </button>
  );
  return (
    <div className="absolute inset-0 z-40">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}/>
      <div className="absolute bottom-0 inset-x-0 bg-white rounded-t-3xl shadow-2xl">
        <div className="mx-auto mt-2 w-12 h-1.5 rounded-full bg-neutral-300"/>
        <div className="max-h-[70vh] overflow-y-auto">
          <Item icon={Settings} label="Edytuj"/>
          <Item icon={MapPin} label="Ustawienia lokalizacji"/>
          <Item icon={BookText} label="Instrukcja obsługi"/>
          <Item icon={Users} label="Kontakty"/>
          <Item icon={Ban} label="Tryb szkolny"/>
          <Item icon={AlarmClock} label="Budzik"/>
          <Item icon={Navigation} label="Wskaż drogę"/>
          <Item icon={Volume2} label="Odtwórz dźwięk"/>
          <Item icon={Headphones} label="Nasłuch"/>
          <Item icon={Power} label="Wyłącz urządzenie"/>
          <Item icon={ActivitySquare} label="Krokomierz" onClick={() => navigate(`/pedometer/${deviceId}`)}/>
          <Item icon={MapPin} label="Strefa"/>
        </div>
        <div className="h-4"/>
      </div>
    </div>
  );
}


