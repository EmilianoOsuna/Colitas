import { contacto, enlaceWhatsApp, mensajeGeneral } from '../data'
import { Chat } from './Iconos'
import { Reveal } from './Reveal'

export function Contacto() {
  return (
    <section id="contacto" className="scroll-mt-4 pb-10 md:pb-14">
      <Reveal className="grid items-center gap-6 rounded-[28px] border-[1.5px] border-line bg-white p-5 sm:p-8 md:grid-cols-[1.2fr_1fr] md:gap-12 md:rounded-[36px] md:p-12">
        <div className="flex flex-col gap-2.5">
          <h2 className="font-slab text-[2rem] leading-[1.03] text-balance md:text-5xl">¿Ya escogiste a tu nuevo integrante?</h2>
          <p className="max-w-[40ch] text-base text-muted md:text-lg">
            Escríbele a {contacto.nombre}. Te cuenta cómo son, qué comen y cuándo puedes conocerlos.
          </p>
        </div>
        <div className="flex flex-col gap-3 rounded-[20px] bg-cream p-4 md:rounded-3xl md:p-[22px]">
          <div className="flex flex-col">
            <span className="text-[13px] font-extrabold text-muted">WhatsApp</span>
            <a href={`tel:+${contacto.whatsapp}`} className="font-slab text-[1.9rem] leading-tight text-ink no-underline md:text-[2.1rem]">
              {contacto.telefono}
            </a>
          </div>
          <div className="flex flex-col border-t-[1.5px] border-dashed border-line pt-2.5">
            <span className="text-[13px] font-extrabold text-muted">Entrega</span>
            <span className="text-[17px] font-bold">{contacto.entrega}</span>
          </div>
          <a
            href={enlaceWhatsApp(mensajeGeneral)}
            target="_blank"
            rel="noopener"
            className="boton mt-1 hidden min-h-14 items-center justify-center gap-2.5 rounded-full bg-cobalt text-[17px] font-extrabold text-white no-underline hover:bg-cobalt-dark md:inline-flex"
          >
            <Chat />
            Escribirle a {contacto.nombre}
          </a>
        </div>
      </Reveal>
    </section>
  )
}
