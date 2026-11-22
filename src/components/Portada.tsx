import { adoptados, contacto, disponibles, enlaceWhatsApp, mensajeGeneral, tituloPortada } from '../data'
import { VideoPortada } from './VideoPortada'
import { Chat, Huella } from './Iconos'

// En celular la portada mide exactamente lo que queda de pantalla
// (100dvh − encabezado − botón fijo de abajo) y el video ocupa el espacio
// sobrante, así siempre se ve sin tener que hacer scroll.
export function Portada() {
  const n = disponibles.length
  const a = adoptados.length
  return (
    <section
      id="inicio"
      className="flex h-[max(380px,calc(100dvh-76px-84px-env(safe-area-inset-bottom)))] flex-col gap-4 overflow-hidden rounded-[28px] bg-sun px-5 pt-5 pb-5 sm:px-8 sm:pt-8 md:grid md:h-auto md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-12 md:rounded-[36px] md:p-14"
    >
      <div className="flex shrink-0 flex-col items-start gap-3 md:gap-5">
        <div className="entrar flex flex-wrap gap-2">
          <span className="rounded-full bg-cream px-3 py-1 text-[13px] font-extrabold md:px-3.5 md:py-1.5 md:text-sm">
            {n} {n === 1 ? 'cachorro' : 'cachorros'} en adopción
          </span>
          {a > 0 && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cobalt px-3 py-1 text-[13px] font-extrabold text-white md:px-3.5 md:py-1.5 md:text-sm">
              <Huella className="size-4" />
              {a} {a === 1 ? 'ya encontró casa' : 'ya encontraron casa'}
            </span>
          )}
        </div>
        <h1
          className="entrar font-slab text-[2.1rem] leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-[5rem]"
          style={{ animationDelay: '80ms' }}
        >
          {tituloPortada(n)}
        </h1>
        <p
          className="entrar max-w-[38ch] text-base font-medium text-pretty max-md:[@media(max-height:620px)]:hidden sm:text-lg md:text-xl"
          style={{ animationDelay: '160ms' }}
        >
          <span className="sm:hidden">Juguetones, curiosos y listos para irse a casa contigo.</span>
          <span className="hidden sm:inline">
            Estás a un mensaje de conocer a tu nuevo mejor amigo. Son juguetones, curiosos y ya están listos para irse a casa.
          </span>
        </p>
        <div
          className="entrar flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:flex-wrap"
          style={{ animationDelay: '240ms' }}
        >
          <a
            href="#perritos"
            className="boton inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-cobalt px-7 text-lg font-extrabold whitespace-nowrap text-white no-underline hover:bg-cobalt-dark md:min-h-14"
          >
            <Huella />
            Conócelos
          </a>
          {/* En celular este botón ya vive en la barra fija de abajo */}
          <a
            href={enlaceWhatsApp(mensajeGeneral)}
            target="_blank"
            rel="noopener"
            className="boton hidden min-h-14 items-center justify-center gap-2.5 rounded-full bg-cream px-6 text-lg font-extrabold whitespace-nowrap text-ink no-underline md:inline-flex"
          >
            <Chat />
            Escribirle a {contacto.nombre}
          </a>
        </div>
      </div>

      <div className="entrar flex min-h-[120px] flex-1 justify-center md:block md:flex-none" style={{ animationDelay: '200ms' }}>
        <div className="relative aspect-square h-full max-w-full md:mx-auto md:aspect-[4/5] md:h-auto md:w-full md:max-w-[420px]">
          <VideoPortada />
          {n > 0 && (
            <span className="absolute right-0 bottom-0 flex size-[74px] rotate-[8deg] flex-col items-center justify-center rounded-full border-4 border-cream bg-cobalt text-center text-white md:right-auto md:bottom-7 md:-left-1.5 md:size-[104px] md:-rotate-[10deg]">
              <span className="font-slab text-3xl leading-[0.9] md:text-[2.5rem]">{n}</span>
              <span className="text-[10px] leading-tight font-extrabold md:text-xs">por adoptar</span>
            </span>
          )}
        </div>
      </div>
    </section>
  )
}
