import { enlaceWhatsApp, perritos, type Perrito } from '../data'
import { Foto } from './Foto'
import { Flecha, Huella } from './Iconos'
import { Reveal } from './Reveal'

function Tarjeta({ p }: { p: Perrito }) {
  return (
    <article className="tarjeta flex h-full flex-col gap-3 rounded-[26px] border-[1.5px] border-line bg-white p-2.5 pb-4 md:rounded-[28px] md:p-3 md:pb-[18px]">
      <div className="relative overflow-hidden rounded-[18px] md:rounded-[20px]">
        <Foto
          nombre={p.foto}
          alt={p.alt}
          sizes="(min-width: 1024px) 210px, (min-width: 768px) 30vw, (min-width: 640px) 46vw, 78vw"
          className={`aspect-[4/5] w-full bg-photo object-cover object-[50%_25%] md:aspect-square md:object-[50%_22%] ${p.adoptado ? 'opacity-70' : ''}`}
        />
        {p.adoptado && (
          <span className="absolute top-3 left-3 rotate-[-6deg] rounded-full bg-sun px-3 py-1 text-sm font-extrabold">
            ¡Ya tiene casa!
          </span>
        )}
      </div>
      <div className="flex flex-col gap-0.5 px-1.5">
        <h3 className="font-slab text-2xl leading-tight lg:text-[1.35rem]">{p.adoptado ? 'Ya adoptado' : 'Aún sin nombre'}</h3>
        <p className="text-[15px] text-muted">{p.adoptado ? 'Encontró una familia.' : 'Ese se lo pones tú.'}</p>
        <p className="mt-2 flex items-center gap-2 border-t-[1.5px] border-dashed border-line pt-2.5 text-[15px] font-bold">
          <span className="size-3.5 shrink-0 rounded-full border-[1.5px] border-ink" style={{ background: p.collar }} aria-hidden="true" />
          {p.descripcion}
        </p>
        {p.sexoEdad && <p className="text-[15px] text-muted">{p.sexoEdad}</p>}
      </div>
      {!p.adoptado && (
        <a
          href={enlaceWhatsApp(`Hola, me interesa ${p.mensaje}, lo vi en la página de los perritos`)}
          target="_blank"
          rel="noopener"
          className="boton mx-1 mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cobalt font-extrabold text-white no-underline hover:bg-cobalt-dark"
        >
          <Huella />
          ¡Adóptame!
        </a>
      )}
    </article>
  )
}

export function Perritos() {
  return (
    <section id="perritos" className="scroll-mt-4 pt-12 pb-4 md:pt-[72px]">
      <Reveal className="flex items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="font-slab text-[2rem] leading-none sm:text-[2.6rem] md:text-[3.25rem]">Hola, somos nosotros</h2>
          <p className="font-medium text-muted">
            <span className="md:hidden">Desliza para conocernos a los cinco.</span>
            <span className="hidden md:inline">Juguetones, curiosos y listos para irse a casa contigo.</span>
          </p>
        </div>
        <Flecha className="size-7 shrink-0 md:hidden" />
      </Reveal>

      {/* Celular: carrusel deslizable. Tablet y compu: cuadrícula. */}
      <ul className="sin-barra -mx-4 mt-5 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-3 sm:-mx-5 sm:scroll-px-5 sm:px-5 md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 lg:grid-cols-5 lg:gap-[18px]">
        {perritos.map((p, i) => (
          <li key={p.id} className="shrink-0 basis-[78%] snap-start sm:basis-[46%] md:basis-auto">
            <Reveal className="h-full" delay={i * 70}>
              <Tarjeta p={p} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
