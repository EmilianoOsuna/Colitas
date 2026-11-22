import { useEffect, useRef, useState } from 'react'
import { fotosPortada } from '../data'

const INTERVALO = 4500

// Fundido entre fotos: solo cambia opacity (barato en cualquier celular).
// Se pausa si la portada no está en pantalla, si la pestaña está oculta
// o si el sistema pide "reducir movimiento".
export function SliderPortada() {
  const [actual, setActual] = useState(0)
  const caja = useRef<HTMLDivElement>(null)
  const visible = useRef(true)

  useEffect(() => {
    const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducir || fotosPortada.length < 2) return
    const el = caja.current
    const io = el ? new IntersectionObserver(([e]) => (visible.current = e.isIntersecting)) : null
    if (el && io) io.observe(el)
    const id = window.setInterval(() => {
      if (visible.current && !document.hidden) setActual((i) => (i + 1) % fotosPortada.length)
    }, INTERVALO)
    return () => {
      window.clearInterval(id)
      io?.disconnect()
    }
  }, [])

  return (
    <div
      ref={caja}
      className="relative aspect-square w-full overflow-hidden border-[6px] border-cream bg-photo [border-radius:46%_54%_44%_56%/40%_42%_58%_60%] md:aspect-[4/5] md:border-8"
    >
      {fotosPortada.map((f, i) => (
        <img
          key={f.foto}
          src={`/img/${f.foto}-800.webp`}
          srcSet={`/img/${f.foto}-480.webp 480w, /img/${f.foto}-800.webp 800w`}
          sizes="(min-width: 768px) 420px, 90vw"
          width={800}
          height={1000}
          alt={f.alt}
          aria-hidden={i !== actual}
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchPriority={i === 0 ? 'high' : 'low'}
          decoding="async"
          className="absolute inset-0 size-full object-cover transition-opacity duration-[900ms] ease-(--ease-suave)"
          style={{ objectPosition: f.posicion, opacity: i === actual ? 1 : 0 }}
        />
      ))}
      <div className="absolute inset-x-0 bottom-3 flex justify-center md:bottom-5">
        <div className="flex gap-1 rounded-full bg-cream/90 px-1.5 py-1">
          {fotosPortada.map((f, i) => (
            <button
              key={f.foto}
              type="button"
              onClick={() => setActual(i)}
              aria-label={`Ver foto ${i + 1} de ${fotosPortada.length}`}
              aria-current={i === actual}
              className="grid size-7 place-items-center rounded-full"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${i === actual ? 'w-5 bg-ink' : 'w-2 bg-ink/35'}`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
