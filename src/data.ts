export const contacto = {
  nombre: 'Martín',
  telefono: '33 1073 1098',
  whatsapp: '523310731098', // 52 + 10 dígitos, sin espacios
  entrega: 'Parque La Loma, Tepic',
}

export type Perrito = {
  id: string
  descripcion: string // cómo se ve en la tarjeta
  mensaje: string // cómo se menciona en el WhatsApp
  collar: string // color del puntito
  foto: string // nombre base en /public/img (sin -480/-800)
  alt: string
  sexoEdad?: string // p. ej. "Macho · 2 meses"
  adoptado?: boolean // ponlo en true cuando encuentre casa
}

export const perritos: Perrito[] = [
  { id: 'azul', descripcion: 'Negrito · collar azul', mensaje: 'el negrito de collar azul', collar: '#3d8fe0', foto: 'negrito-collar-azul', alt: 'Cachorro negro con collar azul', sexoEdad: 'Macho' },
  { id: 'pinta', descripcion: 'Negrito · patita pinta', mensaje: 'el negrito de la patita pinta', collar: '#ffffff', foto: 'negrito-patita-pinta', alt: 'Cachorro negro con una pata blanca con manchas', sexoEdad: 'Macho' },
  { id: 'rojo', descripcion: 'Negrito · collar rojo', mensaje: 'el negrito de collar rojo', collar: '#e0393e', foto: 'negrito-collar-rojo', alt: 'Cachorro negro con collar rojo asomándose por la ventana de un carro', sexoEdad: 'Macho' },
  { id: 'atigrado', descripcion: 'Atigrado', mensaje: 'el atigrado', collar: '#7a5634', foto: 'atigrado', alt: 'Cachorro atigrado café', sexoEdad: 'Macho' },
  { id: 'canela', descripcion: 'Canela · collar verde', mensaje: 'la canela de collar verde', collar: '#6fd13f', foto: 'canela', alt: 'Cachorrita color canela con collar verde asomándose por la ventana de un carro', sexoEdad: 'Hembra' },
]

export const enlaceWhatsApp = (texto: string) =>
  `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(texto)}`

export const mensajeGeneral = 'Hola, vi la página de los perritos y me interesa adoptar'

// ---- Conteos que se recalculan solos según `adoptado` ----
export const disponibles = perritos.filter((p) => !p.adoptado)
export const adoptados = perritos.filter((p) => p.adoptado)

const palabras = ['Cero', 'Una', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve', 'Diez']
export const enLetras = (n: number) => palabras[n] ?? String(n)

export function tituloPortada(n: number) {
  if (n === 0) return 'Todas las colitas encontraron familia.'
  if (n === 1) return 'Una colita busca familia.'
  return `${enLetras(n)} colitas buscan familia.`
}
