import { Huella } from './Iconos'

export function Pie() {
  return (
    <footer className="flex flex-wrap justify-between gap-x-6 gap-y-2 pb-12 text-[15px] text-muted">
      <p className="max-w-[60ch]">Un perrito vive de 10 a 15 años. Antes de adoptar, platícalo en casa.</p>
      <span className="inline-flex items-center gap-1.5 font-bold">
        <Huella className="size-4" />
        Cinco colitas
      </span>
    </footer>
  )
}
