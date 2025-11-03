export default function FakeStatusBar() {
  return (
    <div className="w-full h-10 px-4 flex items-center justify-between text-[13px] text-black/80">
      <div className="font-medium">08:37</div>
      <div className="flex items-center gap-2">
        {/* Ikonki – uproszczone „kropki”/emotikony */}
        <span>📶</span>
        <span>LTE</span>
        <span>🔋47</span>
      </div>
    </div>
  );
}


