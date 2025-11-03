import { useState } from 'react'
import { User } from 'lucide-react'

export default function AvatarFallback({ src, size = 36, className = '' }) {
  const [errored, setErrored] = useState(false)

  const dimensionStyle = { width: `${size}px`, height: `${size}px` }

  return (
    <div
      className={`rounded-full bg-white flex items-center justify-center overflow-hidden ${className}`}
      style={dimensionStyle}
    >
      {src && !errored ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          style={dimensionStyle}
          className="object-contain"
          onError={() => setErrored(true)}
        />
      ) : (
        <User size={Math.round(size * 0.6)} className="text-neutral-400" />
      )}
    </div>
  )
}


