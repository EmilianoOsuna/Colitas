import { contacto } from '../data'
import { Reveal } from './Reveal'

const pasos = [
  { t: 'Elige', d: 'Mira sus fotos y escoge al que te robe el corazón.' },
  { t: 'Escribe', d: `Manda un WhatsApp a ${contacto.nombre} y dile cuál te gustó.` },
  { t: 'Conócelo', d: `Pasa por tu cachorro a ${contacto.entrega.split(',')[0]} y llévalo a casa.` },
]

export function Pasos() {
  return (
    <section className="py-10 md:py-14">
      <Reveal className="flex flex-col gap-5 rounded-[28px] bg-cobalt px-4 pt-6 pb-4 text-white sm:p-8 md:gap-7 md:rounded-[36px] md:p-12">
        <h2 className="px-1 font-slab text-[1.9rem] leading-tight md:text-[2.75rem]">Adoptar es así de fácil</h2>
        <ol className="grid gap-3 sm:grid-cols-3 md:gap-4">
          {pasos.map((p, i) => (
            <li key={p.t} className="flex items-start gap-3.5 rounded-[20px] bg-white p-4 text-ink sm:flex-col sm:gap-2 md:rounded-3xl md:p-[22px]">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sun font-slab text-xl md:size-11 md:text-[1.4rem]">
                {i + 1}
              </span>
              <div className="flex flex-col gap-0.5">
                <h3 className="font-slab text-[1.35rem] leading-tight md:text-2xl">{p.t}</h3>
                <p className="text-[15px] text-muted md:text-base">{p.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}
