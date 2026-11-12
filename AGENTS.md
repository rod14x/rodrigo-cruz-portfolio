# Instrucciones para agentes de IA

Este repositorio es el **portafolio personal de Rodrigo Cruz** (React 19 + Vite 8 + Tailwind CSS 4 + Motion), creado a partir de una plantilla. Tu trabajo principal es mantener sus datos al día sin romper el diseño ni inventar nada.

Habla en español, salvo que la persona escriba en otro idioma. Es probable que no sea experta en código: explica cada paso en lenguaje simple.

## Flujo para cargar los datos

Cuando la persona pida algo como *"completa mi portafolio"*, *"carga mis datos"* o *"personaliza la plantilla"*:

1. **Lee `DATOS.md`.** Es la ficha con todo lo que el portafolio necesita. Puede venir rellena (texto después de cada `→`) o vacía.
2. **Busca fuentes.** Si hay un PDF en `public/cv/` (su CV o su perfil de LinkedIn exportado), léelo y extrae lo que sirva. Si la persona pega texto de su LinkedIn o CV en el chat, úsalo igual.
3. **Pregunta lo que falte, por bloques** (identidad y contacto → sobre mí → experiencia → educación y certificados → habilidades → proyectos). Unas 3 a 6 preguntas por mensaje, no todas juntas. Primero lo **obligatorio** (bloques 1 y 2).
4. **Muestra un resumen** de lo que vas a cargar y espera su confirmación.
5. **Edita los archivos** según el mapa de abajo. Escribe en **español** y traduce al **inglés** (`content.en`) con el mismo significado.
6. **Verifica:** `npm run lint` y `npm run build` sin errores. Luego levanta `npm run dev` y revisa `/`, `/proyectos` y `/sobre-mi`, en español e inglés.
7. **Cuenta qué cambiaste** y qué falta: fotos, capturas, CV, `og.png` o la URL final.

Al terminar, puedes ofrecer rellenar `DATOS.md` con lo cargado, para que quede como registro.

## Reglas

- **No inventes datos.** Nada de empresas, fechas, cifras, logros, certificados ni enlaces que la persona no haya dado. Si falta algo opcional, quita esa parte o deja un texto neutro, y avísalo.
- **Mantén los dos idiomas sincronizados.** Todo texto de `content.es` debe tener su equivalente en `content.en`.
- **Respeta los formatos de `src/content.js`:**
  - `'texto en español|text in English'` → se separa por idioma (se usa en tags y nombres compartidos).
  - Texto enriquecido: lista de tramos `[{ t: 'normal' }, { b: 'negrita' }, { h: 'resaltado' }]`.
  - Las claves deben coincidir: cada `projects[].key` necesita su entrada en `content.es.projects.items` y en `content.en.projects.items`.
- **Separa el aporte personal del trabajo del equipo** en cada caso (campo `team`). No atribuyas a Rodrigo módulos, logros ni tareas de otras personas.
- **Nada de controles que no funcionen:** enlaces vacíos (`''`) se ocultan; el CV solo aparece si `contact.cv` apunta a un PDF real.
- **No toques los componentes** (`src/components/`, `src/pages/`) salvo que la persona pida cambiar el diseño. Todo dato personal se edita en los archivos de la tabla.
- **No subas a producción ni hagas `git push`** sin que la persona lo pida.

## Mapa: qué dato va dónde

| Dato (bloque de DATOS.md) | Archivo y campo |
|---|---|
| Nombre corto, nombre completo, iniciales (1) | `src/content.js` → `profile.name`, `profile.fullName`, `profile.initials` |
| Iniciales en el ícono de la pestaña (1) | `public/favicon.svg` → texto `TN` |
| Rol y ciudad para Google y redes (1) | `index.html` → `<title>`, `description`, `og:title`, `og:description` y `og:locale` · `src/content.js` → `content.<idioma>.meta` |
| Frase bajo el nombre (1) | `content.<idioma>.tagline` |
| Ciudad y país (1) | `content.<idioma>.closing.location`, `about.jobs[].place` |
| Email, LinkedIn, GitHub, CV (2) | `contact` (el CV se sirve desde `public/cv/cv.pdf`; mientras `cv` sea `''` no se muestra) |
| Saludo y titular (3) | `content.<idioma>.hero` (`hello`, `headline` = [texto, palabra destacada], `side`) |
| Sobre mí (4) | `content.<idioma>.about.intro` y `about.items` (tarjetas; `icon`: `burst`, `spark`, `server` o `shield`) |
| Experiencia (5) | `content.<idioma>.about.jobs` (`current: true` solo en el trabajo actual; `note` = aclaración; `groups` = [{ `title`, `points` }]; `caseKey` enlaza a un caso) |
| Educación (6) | `content.<idioma>.about.education` (`short` = nombre corto de la institución) |
| Certificados (7) | `content.<idioma>.about.certs` (`highlight: true` en el principal, `expired: true` si venció) y `about.records` (constancias de participación) |
| Eventos | `content.<idioma>.about.events` (fotos en `src/assets/galeria/<key>/`) |
| Habilidades (8) | `skills` (quita los grupos vacíos; los nombres de grupo están en `about.groups`) |
| Proyectos (9) | `projects` (datos técnicos) y `content.<idioma>.projects.items.<key>` (`org`, `badge`, `title`, `desc`, `context`, `problem`, `role` = lista, `team`, `evidence` = [{ `label`, `href`? }]) |
| Fotos de evidencia (10) | `src/assets/galeria/<key>/` (ver su `LEEME.md`) |
| Muro de capturas (11) | `wall` + archivos en `src/assets/wall/` (si falta la foto, la pieza no se muestra; `code`: `deploy`, `gitflow` o `network`) |
| Textos de la curva y del muro | `content.<idioma>.story` y `content.<idioma>.wall` (puedes adaptarlos a la persona) |
| URL final (12) | `index.html` → descomenta `og:url`, `og:image` y `canonical` y reemplaza `https://TU-DOMINIO.vercel.app` |

### Detalles de `projects`

- `key`: identificador sin espacios ni tildes (ej. `tienda-online`).
- `name`: admite `'español|English'`.
- `image`: nombre del archivo en `src/assets/projects/` sin extensión (normalmente igual a `key`). Si no existe, se muestra la ilustración `art` (`deploy`, `gitflow`, `network`, `erp`, `termometro`, `keptai`; están en `src/components/Decor.jsx`).
- `live` (URL en producción) y/o `code` (repositorio): opcionales. Si no hay, no se muestra botón externo; en el inicio, cada proyecto lleva a su caso en `/proyectos#<key>`.
- `tabs`: pestañas de `/proyectos` donde aparece: `software`, `security`, `infra`.
- `tint`: color pastel de fondo del marco (ej. `#e9e4dc`). Usa un tono distinto por proyecto.
- Funciona bien con 1 a 6 proyectos.

## Imágenes

| Qué | Dónde | Formato |
|---|---|---|
| Foto | `src/assets/about/` (1 a 4 archivos) | vertical 4:5, ej. 800×1000 |
| Captura de cada proyecto | `src/assets/projects/<image>.webp` | 16:10, ej. 1280×800 |
| Capturas del muro | `src/assets/wall/<nombre>.webp` | 4:3, o 3:5 si `tall: true` |
| Vista previa en redes | `public/og.png` | 1200×630 |
| CV | `public/cv/cv.pdf` | PDF |

Se aceptan `.webp`, `.jpg` y `.png`. Si la persona entrega imágenes muy pesadas (más de 300 KB), sugiere convertirlas a `.webp`.

## Comandos

```bash
npm install       # instalar dependencias (la primera vez)
npm run dev       # servidor local en http://localhost:5173
npm run lint      # revisar el código
npm run build     # compilar a dist/
npm run preview   # servir la versión compilada
```

En Windows PowerShell, si `npm` está bloqueado por la política de ejecución, usa `npm.cmd`.

## Estructura

```
src/content.js        ← todos los textos y datos (ES/EN)
src/assets/           ← foto, capturas de proyectos, muro y galeria/ (evidencias)
public/               ← CV, og.png, favicon
index.html            ← metadatos para Google y redes
src/lib.js            ← rutas, idioma e imágenes
src/App.jsx           ← layout y transiciones
src/components/       ← header, dock, decoraciones
src/pages/            ← Home (/), Works (/proyectos: casos), About (/sobre-mi: experiencia, educación, certificaciones, eventos)
```

## Notas técnicas

- `lucide-react` está fijado en `0.468.0`, porque esa versión todavía exporta los íconos `Github` y `Linkedin`. No lo actualices sin cambiar esos íconos.
- Tailwind 4 se configura con `@config "../tailwind.config.js"` en `src/index.css` y PostCSS (`@tailwindcss/postcss`).
- La web respeta `prefers-reduced-motion`: sin animaciones si el sistema lo pide.
- `vercel.json` define cabeceras de seguridad, incluida una CSP que solo permite recursos propios y Google Fonts. Si agregas un recurso externo (otra fuente, un script, un video de YouTube), permítelo en la CSP o el navegador lo bloqueará.
- En pantallas de menos de 768 px se simplifican las animaciones que se repintan al hacer scroll (la curva aparece ya dibujada, el muro sin parallax, la barra inferior sin desenfoque). El vuelo de las tarjetas solo usa `transform` y `opacity`: si lo editas, no animes `width`, `height`, `top` ni `left`, ni midas el layout (`getBoundingClientRect`) en cada fotograma.
- Los videos del muro (`src/assets/wall/*.mp4`) se descargan y reproducen solo cuando están a la vista. Mantenlos cortos y por debajo de ~3 MB.

## Publicar en Vercel (cuando la persona lo pida)

1. Subir el proyecto a un repositorio de GitHub de la persona.
2. En vercel.com → *Add New → Project* → importar el repositorio. `vercel.json` ya define el build (`npm run build`, salida `dist`) y la reescritura para que `/proyectos` y `/sobre-mi` funcionen al recargar.
3. Con la URL final, actualizar `og:url`, `og:image` y `canonical` en `index.html`.
