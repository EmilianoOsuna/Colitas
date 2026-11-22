import { Huella } from './Iconos'

export function Pie() {
  return (
    <footer className="flex flex-wrap justify-between gap-x-6 gap-y-2 pb-12 text-[15px] text-muted">
      <p className="flex max-w-[62ch] items-start gap-2.5">
        <svg className="mt-0.5 size-5 shrink-0 text-cobalt" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
        <span>
          <strong className="font-bold text-ink">Ya están desparasitados.</strong> Solo les faltan las vacunas: hay que esperar unos días más después de la desparasitación para poder ponérselas.
        </span>
      </p>
      <span className="inline-flex items-center gap-1.5 font-bold">
        <Huella className="size-4" />
        Cinco colitas
      </span>
    </footer>
  )
}
