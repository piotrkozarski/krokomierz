import FakeStatusBar from "./FakeStatusBar";
import HamburgerButton from "./HamburgerButton";
import DeviceMarker from "./DeviceMarker";
import DeviceSheet from "./DeviceSheet";
import FloatingButtons from "./FloatingButtons";
import BottomNav from "./BottomNav";
import MoreSheet from "./MoreSheet";
import data from "../../mocks/pedometer.json";
import { useState } from "react";

export default function HomeMap() {
  const device = data?.devices?.[0] || { id: "demo1", name: "BS03s_9854" };
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <div className="w-full h-full relative bg-white overflow-hidden">
      <FakeStatusBar />
      <HamburgerButton onClick={() => { /* opcjonalnie otwórz jakieś menu */ }} />

      {/* MAPA (placeholder) */}
      <div className="absolute inset-0 top-10">
        <div className="w-full h-full bg-[#e6edf3] relative">
          {/* imitacja Google map z logo */}
          <div className="absolute right-2 bottom-2 text-[10px] text-neutral-500">Google</div>
        </div>
      </div>

      {/* Marker urządzenia */}
      <DeviceMarker imgSrc="/device.png" />

      {/* Przyciski pływające */}
      <FloatingButtons />

      {/* Dolny sheet z kartą urządzenia */}
      <DeviceSheet name={device.name || "BS03s_9854"} />

      {/* Dolne menu nawigacyjne */}
      <BottomNav onMore={() => setMoreOpen(true)} />

      {/* Arkusz „Więcej” */}
      <MoreSheet open={moreOpen} onClose={() => setMoreOpen(false)} deviceId={device.id} />
    </div>
  );
}


