import type React from 'react'

type Props = {
  nombre: string
  alt: string
  sizes: string
  className?: string
  prioridad?: boolean
  style?: React.CSSProperties
}

// Sirve la versión de 480 px o 800 px según el ancho de la pantalla.
export function Foto({ nombre, alt, sizes, className = '', prioridad = false, style }: Props) {
  return (
    <img
      src={`/img/${nombre}-800.webp`}
      srcSet={`/img/${nombre}-480.webp 480w, /img/${nombre}-800.webp 800w`}
      sizes={sizes}
      width={800}
      height={1000}
      alt={alt}
      loading={prioridad ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={prioridad ? 'high' : 'auto'}
      className={className}
      style={style}
    />
  )
}
