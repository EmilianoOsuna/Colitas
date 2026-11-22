import { Huella } from './Iconos'

export function Encabezado() {
  return (
    <header className="flex items-center justify-between gap-3 py-4 md:py-5">
      <a href="#inicio" className="inline-flex items-center gap-2 font-slab text-lg whitespace-nowrap text-ink no-underline min-[380px]:gap-2.5 min-[380px]:text-xl md:text-2xl">
        <span className="grid size-9 place-items-center rounded-full bg-sun md:size-10">
          <Huella />
        </span>
        Cinco colitas
      </a>
      <a
        href="#contacto"
        className="boton inline-flex min-h-11 items-center rounded-full bg-cobalt px-4 text-sm whitespace-nowrap font-extrabold text-white no-underline hover:bg-cobalt-dark md:px-6 md:text-base"
      >
        <span className="min-[380px]:hidden">Adoptar</span>
        <span className="hidden min-[380px]:inline">Quiero adoptar</span>
      </a>
    </header>
  )
}
