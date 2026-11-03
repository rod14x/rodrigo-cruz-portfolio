# rodrigo-cruz-portfolio

Portafolio profesional de Rodrigo Cruz: desarrollo SaaS, liderazgo técnico, ciberseguridad e infraestructura TI. En español e inglés.

Hecho con React 19, Vite 8, Tailwind CSS 4 y Motion. No tiene backend.

## Páginas

- `/`: presentación, proyectos destacados, cómo trabajo y contacto.
- `/proyectos`: casos de NISTrack, Termómetro de Resiliencia Operativa, KeptAI e infraestructura IESTP, con contexto, problema, mi participación, alcance del equipo y evidencias.
- `/sobre-mi`: experiencia, educación, habilidades, certificaciones, constancias y eventos.

## Desarrollo local

Necesitas [Node.js](https://nodejs.org) 20 o superior.

```bash
npm install       # instalar dependencias
npm run dev       # servidor local en http://localhost:5173
npm run lint      # revisar el código
npm run build     # compilar a dist/
```

## Actualizar contenido

- **Textos y datos (ES/EN):** `src/content.js`.
- **Foto:** `src/assets/about/` (vertical 4:5).
- **Captura de cada proyecto:** `src/assets/projects/<key>.webp` (16:10).
- **Fotos de evidencia y eventos:** `src/assets/galeria/<key>/` (ver su `LEEME.md`).
- **CV:** copia el PDF a `public/cv/cv.pdf` y pon `cv: '/cv/cv.pdf'` en `contact`.
- **Vista previa en redes:** `public/og.png` (1200×630).

Las instrucciones para agentes de IA están en `AGENTS.md`.

## Publicar

Listo para Vercel: `vercel.json` define el build y las rutas. Después de publicar, actualiza `og:url`, `og:image` y `canonical` en `index.html` con la URL final.
