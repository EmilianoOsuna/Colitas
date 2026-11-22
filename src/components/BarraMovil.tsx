import { contacto, enlaceWhatsApp, mensajeGeneral } from '../data'
import { Chat } from './Iconos'

// Botón fijo abajo, solo en celular y tablet chica.
export function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-10 border-t-[1.5px] border-line bg-cream px-3 pt-2.5 pb-[max(14px,env(safe-area-inset-bottom))] md:hidden">
      <a
        href={enlaceWhatsApp(mensajeGeneral)}
        target="_blank"
        rel="noopener"
        className="boton mx-auto flex min-h-14 max-w-md items-center justify-center gap-2.5 rounded-full bg-cobalt text-[17px] font-extrabold text-white no-underline"
      >
        <Chat />
        Escribirle a {contacto.nombre}
      </a>
    </div>
  )
}
