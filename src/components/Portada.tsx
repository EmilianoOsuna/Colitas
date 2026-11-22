import { adoptados, contacto, disponibles, enlaceWhatsApp, mensajeGeneral, tituloPortada } from '../data'
import { SliderPortada } from './SliderPortada'
import { Chat, Huella } from './Iconos'

export function Portada() {
  const n = disponibles.length
  const a = adoptados.length
  return (
    <section
      id="inicio"
      className="grid items-center gap-8 overflow-hidden rounded-[28px] bg-sun px-5 py-7 sm:px-8 sm:py-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:rounded-[36px] md:p-14"
    >
      <div className="flex flex-col items-start gap-4 md:gap-5">
        <div className="entrar flex flex-wrap gap-2">
          <span className="rounded-full bg-cream px-3.5 py-1.5 text-sm font-extrabold">
            {n} {n === 1 ? 'cachorro' : 'cachorros'} en adopción
          </span>
          {a > 0 && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cobalt px-3.5 py-1.5 text-sm font-extrabold text-white">
              <Huella className="size-4" />
              {a} {a === 1 ? 'ya encontró casa' : 'ya encontraron casa'}
            </span>
          )}
        </div>
        <h1
          className="entrar font-slab text-[2.6rem] leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-[5rem]"
          style={{ animationDelay: '80ms' }}
        >
          {tituloPortada(n)}
        </h1>
        <p className="entrar max-w-[38ch] text-lg font-medium text-pretty md:text-xl" style={{ animationDelay: '160ms' }}>
          Estás a un mensaje de conocer a tu nuevo mejor amigo. Son juguetones, curiosos y ya están listos para irse a casa.
        </p>
        <div
          className="entrar flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:flex-wrap"
          style={{ animationDelay: '240ms' }}
        >
          <a
            href="#perritos"
            className="boton inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-cobalt px-7 text-lg font-extrabold whitespace-nowrap text-white no-underline hover:bg-cobalt-dark"
          >
            <Huella />
            Conócelos
          </a>
          <a
            href={enlaceWhatsApp(mensajeGeneral)}
            target="_blank"
            rel="noopener"
            className="boton inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-cream px-6 text-lg font-extrabold whitespace-nowrap text-ink no-underline"
          >
            <Chat />
            Escribirle a {contacto.nombre}
          </a>
        </div>
      </div>

      <div className="entrar relative mx-auto w-full max-w-[420px]" style={{ animationDelay: '200ms' }}>
        <SliderPortada />
        {n > 0 && (
          <span className="absolute right-1 bottom-2 flex size-[86px] rotate-[8deg] flex-col items-center justify-center rounded-full border-4 border-cream bg-cobalt text-center text-white md:right-auto md:bottom-7 md:-left-1.5 md:size-[104px] md:-rotate-[10deg]">
            <span className="font-slab text-4xl leading-[0.9] md:text-[2.5rem]">{n}</span>
            <span className="text-[11px] leading-tight font-extrabold md:text-xs">por adoptar</span>
          </span>
        )}
      </div>
    </section>
  )
}
