# Ficha de datos del portafolio

Esta ficha reúne **todo lo que el portafolio necesita sobre ti**. Hay dos formas de usarla:

- **Rellénala tú** (escribe después de cada `→`) y luego pídele a tu agente de IA: *"Carga mis datos de DATOS.md en el portafolio"*.
- **O déjala vacía** y pídele a tu agente: *"Ayúdame a completar mi portafolio"*. El agente te hará estas preguntas por bloques.

Lo marcado con **(obligatorio)** es necesario para publicar. Lo demás es opcional: si lo dejas vacío, el agente quita esa parte o deja un texto neutro, nunca inventa datos.

Atajo útil: si tienes tu **CV en PDF** o tu **perfil de LinkedIn exportado en PDF** (LinkedIn → tu perfil → *Más* → *Guardar como PDF*), cópialo a la carpeta `public/cv/` y dile al agente que lo lea. Así podrá sacar casi todo de ahí y solo te preguntará lo que falte.

---

## 1. Identidad (obligatorio)

- Nombre corto para el header (ej. "Ana Pérez") → 
- Nombre completo para el footer → 
- Iniciales (2 letras, para el favicon y la foto vacía) → 
- Rol o título (ej. "Desarrollador Web Jr.", "Frontend Developer") → 
- Ciudad y país → 
- Frase corta bajo tu nombre (ej. "backend & full-stack", "frontend y diseño UI") → 

## 2. Contacto (obligatorio)

- Email → 
- URL de LinkedIn → 
- URL de GitHub → 
- ¿Tienes CV en PDF? Si sí, cópialo a `public/cv/cv.pdf` → sí / no

## 3. Portada (inicio)

- Titular principal. Por defecto: *"Construyo aplicaciones web que simplemente… funcionan"*. Puedes dejarlo o escribir el tuyo → 
- Frase lateral. Por defecto: *"construyo productos de punta a punta, de la base de datos al deploy"* → 

## 4. Sobre mí

- Qué estudias o estudiaste, y en qué ciclo o año vas → 
- Una o dos frases sobre qué te gusta construir → 
- Qué haces hoy (trabajo, prácticas o freelance) y con qué tecnologías → 
- Cómo usas la IA en tu trabajo (opcional) → 
- Tus logros más importantes: hackathons, premios, docencia, etc. (opcional) → 

## 5. Experiencia (una entrada por trabajo, del más reciente al más antiguo)

Para cada trabajo:

- Puesto → 
- Empresa → 
- Ciudad → 
- Fecha de inicio y fin (o "actualidad") → 
- De 2 a 4 logros o responsabilidades: qué hiciste, con qué tecnologías y qué resultado tuvo → 

Si no tienes experiencia laboral, el agente puede dejar solo prácticas, voluntariados o proyectos académicos, o quitar la sección.

## 6. Educación

- Carrera → 
- Universidad o instituto (nombre corto también, ej. "UNI", "UTP") → 
- Ciudad → 
- Fechas → 
- Logros académicos (tercio superior, grupos, beca…) → 

## 7. Certificados (opcional)

Uno por línea: título, entidad, año. Marca con ⭐ el más importante.

- → 

## 8. Habilidades

Escribe solo lo que puedas defender en una entrevista. Deja vacíos los grupos que no apliquen.

- Lenguajes → 
- Backend → 
- Frontend → 
- Bases de datos → 
- Mobile → 
- Cloud y DevOps → 
- Testing y QA → 
- Arquitectura y paradigmas → 

## 9. Proyectos (de 1 a 6)

Para cada proyecto:

- Nombre → 
- Año → 
- Contexto (empresa, curso, hackathon o "proyecto personal") → 
- Título de una línea, en primera persona (ej. "Desarrollé una tienda online con pagos integrados") → 
- Descripción corta: qué hace y con qué tecnologías → 
- Tecnologías (3 a 5 tags) → 
- URL en producción (si existe) → 
- URL del repositorio (si es público) → 
- ¿Usa IA? → sí / no
- Captura: guarda `src/assets/projects/<nombre-del-proyecto>.webp` (16:10, ~1280×800). Si no hay, se dibuja una ilustración de código.

## 10. Laboratorio (opcional)

Experimentos o cosas que aprendiste por tu cuenta (servidores, librerías, scripts). Para cada uno: título, área (ej. DevOps, Datos, IA), descripción de una línea y tecnologías.

- → 

## 11. Imágenes (opcional, pero recomendadas)

- **Foto:** `src/assets/about/` (vertical 4:5).
- **Capturas para el muro del inicio:** `src/assets/wall/muro-1.webp` … `muro-9.webp`. `muro-2`, `muro-3` y `muro-8` son verticales (capturas de móvil).
- **Imagen para redes:** `public/og.png` (1200×630). Es la vista previa al compartir el enlace.

## 12. Publicación (después de desplegar)

- URL final del portafolio (ej. `https://ana-perez.vercel.app`) → 
