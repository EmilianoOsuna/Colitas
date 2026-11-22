import { useEffect, useRef, type ReactNode } from 'react'

// Un solo IntersectionObserver para toda la página: barato hasta en celulares sencillos.
let observer: IntersectionObserver | null = null
function getObserver() {
  if (!observer && typeof IntersectionObserver !== 'undefined') {
    observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer!.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
  }
  return observer
}

type Props = { children: ReactNode; className?: string; delay?: number }

export function Reveal({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    const obs = getObserver()
    if (!el) return
    if (!obs) {
      el.classList.add('visible')
      return
    }
    obs.observe(el)
    return () => obs.unobserve(el)
  }, [])
  return (
    <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  )
}
