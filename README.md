# Cinco colitas

Página de adopción de los perritos de Martín. React + Vite + Tailwind CSS v4.

## Desarrollo

```bash
npm install
npm run dev
```

## Editar contenido

Todo vive en `src/data.ts`:

- `contacto`: nombre, teléfono, WhatsApp (52 + 10 dígitos) y zona de entrega.
- `perritos`: la lista. Para cada uno puedes poner `sexoEdad: 'Macho · 2 meses'`.
  Cuando uno encuentre casa, ponle `adoptado: true` y la tarjeta cambia sola
  (badge "¡Ya tiene casa!" y sin botón de WhatsApp).

Las fotos están en `public/img/` en dos tamaños WebP (`-480` y `-800`).
Para agregar una nueva, súbela con el mismo patrón de nombre y usa el nombre base en `foto`.

## Publicar en Cloudflare Pages

1. Sube el proyecto a un repo de GitHub y conéctalo en Cloudflare Pages
   (o usa `npx wrangler pages deploy dist` después de `npm run build`).
2. Framework preset: **Vite** · Build command: `npm run build` · Output: `dist`.
3. Cambia `VITE_SITE_URL` en `.env` por el dominio final para que la vista previa
   al compartir por WhatsApp muestre la imagen (`public/img/og.jpg`).

`public/_headers` deja en caché largo los archivos con hash de `/assets`.

## Rendimiento

- Sin librerías de animación: solo CSS con `transform` y `opacity`, más un único
  `IntersectionObserver` para aparecer al hacer scroll.
- Respeta "reducir movimiento" del sistema.
- Imágenes WebP con `srcset`, carga diferida y la foto principal precargada.
- Fuentes self-hosted (Zilla Slab 700 latín y Figtree variable), sin Google Fonts.
