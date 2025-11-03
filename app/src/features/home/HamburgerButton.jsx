export default function HamburgerButton({ onClick }) {
  return (
    <button
      aria-label="menu"
      onClick={onClick}
      className="absolute top-16 left-4 z-30 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
    >
      <div className="w-5 h-0.5 bg-black mb-1" />
      <div className="w-5 h-0.5 bg-black mb-1" />
      <div className="w-5 h-0.5 bg-black" />
    </button>
  );
}


