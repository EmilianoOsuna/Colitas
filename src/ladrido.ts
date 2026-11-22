// Ladrido cortito (~0.27 s, 4 KB) al tocar cualquier botón que abre WhatsApp.
// Un solo listener para toda la página: no hay que tocar cada botón.
let audio: HTMLAudioElement | null = null

function obtenerAudio() {
  if (!audio) {
    audio = new Audio('/audio/ladrido.mp3')
    audio.preload = 'auto'
    audio.volume = 0.7
  }
  return audio
}

export function activarLadrido() {
  // Se carga en cuanto la persona toca la página por primera vez,
  // así ya está listo cuando le dé al botón.
  const precargar = () => obtenerAudio().load()
  window.addEventListener('pointerdown', precargar, { once: true, passive: true })

  document.addEventListener(
    'click',
    (e) => {
      const enlace = (e.target as Element | null)?.closest?.('a[href*="wa.me"]')
      if (!enlace) return
      const a = obtenerAudio()
      a.currentTime = 0
      a.play().catch(() => {})
    },
    { capture: true },
  )
}
