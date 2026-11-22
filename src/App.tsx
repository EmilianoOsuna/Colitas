import { BarraMovil } from './components/BarraMovil'
import { Contacto } from './components/Contacto'
import { Encabezado } from './components/Encabezado'
import { Perritos } from './components/Perritos'
import { Pasos } from './components/Pasos'
import { Pie } from './components/Pie'
import { Portada } from './components/Portada'

export default function App() {
  return (
    <>
      <div className="mx-auto max-w-[1120px] px-4 pb-24 sm:px-5 md:pb-0">
        <Encabezado />
        <main>
          <Portada />
          <Perritos />
          <Pasos />
          <Contacto />
        </main>
        <Pie />
      </div>
      <BarraMovil />
    </>
  )
}
