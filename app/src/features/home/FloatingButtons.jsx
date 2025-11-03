import { Trash2, Settings } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="absolute right-[14px] bottom-[132px] z-30 flex flex-col gap-3">
      <button className="w-[52px] h-[52px] rounded-[26px] bg-white shadow-[0_8px_18px_rgba(0,0,0,0.14)] border border-[rgba(0,0,0,0.06)] flex items-center justify-center">
        <Trash2 size={20}/>
      </button>
      <button className="w-[52px] h-[52px] rounded-[26px] bg-white shadow-[0_8px_18px_rgba(0,0,0,0.14)] border border-[rgba(0,0,0,0.06)] flex items-center justify-center">
        <Settings size={20}/>
      </button>
    </div>
  );
}


