import { useEffect, useRef, useState } from 'react'

// Video de los 5 en su caja. Sin audio, en loop, ~420 KB (WebM ~460 KB / MP4 ~420 KB).
// - Solo se reproduce mientras está en pantalla (ahorra batería y datos).
// - Con "reducir movimiento" o "ahorro de datos" se queda la imagen fija.
export function VideoPortada() {
  const ref = useRef<HTMLVideoElement>(null)
  const [animar, setAnimar] = useState(false)

  useEffect(() => {
    const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ahorro = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData
    if (reducir || ahorro) return
    setAnimar(true)
  }, [])

  useEffect(() => {
    const v = ref.current
    if (!animar || !v) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {})
      else v.pause()
    })
    io.observe(v)
    return () => io.disconnect()
  }, [animar])

  return (
    <div className="absolute inset-0 overflow-hidden border-[6px] border-cream bg-photo [border-radius:46%_54%_44%_56%/40%_42%_58%_60%] md:border-8">
      {animar ? (
        <video
          ref={ref}
          className="absolute inset-0 size-full object-cover"
          poster="/video/portada-poster.webp"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          aria-label="Video de los cinco cachorros juntos en una caja"
        >
          <source src="/video/portada.webm" type="video/webm" />
          <source src="/video/portada.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src="/video/portada-poster.webp"
          width={480}
          height={600}
          alt="Los cinco cachorros juntos en una caja"
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover"
        />
      )}
    </div>
  )
}
