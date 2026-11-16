// ─────────────────────────────────────────────────────────────────────────────
// TODO EL CONTENIDO DEL PORTAFOLIO VIVE EN ESTE ARCHIVO.
// Los textos con "es|en" se separan por idioma: lo de la izquierda es español y lo de la derecha, inglés.
// Los textos enriquecidos son listas de tramos: { t } normal, { b } en negrita, { h } resaltado.
// ─────────────────────────────────────────────────────────────────────────────

// Datos personales que se usan en el header, el footer, la foto y los enlaces.
export const profile = {
  name: 'Rodrigo Cruz',
  fullName: 'Rodrigo Cruz',
  initials: 'RC',                       // se muestran si no hay foto en src/assets/about/
}

// Enlaces de contacto. Un enlace vacío ('') no se muestra.
// `cv`: un PDF por idioma en public/cv/ (ej. { es: '/cv/cv-es.pdf', en: '/cv/cv-en.pdf' }).
//   Si falta el de un idioma se usa el otro; también acepta una sola ruta ('/cv/cv.pdf').
export const contact = {
  github: 'https://github.com/rod14x',
  linkedin: 'https://www.linkedin.com/in/rodrigo-cruz-5a9988356/',
  email: 'german.rodrigo.cruz14@gmail.com',
  cv: { es: '/cv/cv-es.pdf', en: '/cv/cv-en.pdf' },   // copias web sin teléfono
}

// Habilidades agrupadas (sin niveles). Los nombres de los grupos están en content.<idioma>.about.groups.
export const skills = [
  { key: 'dev', items: ['TypeScript', 'JavaScript', 'PHP', 'Laravel', 'Astro', 'React.js', 'Spring Boot', 'PostgreSQL', 'Desarrollo full stack|Full-stack development', 'Algoritmos|Algorithms', 'Modelado de bases de datos|Database modeling', 'Diagramas de flujo y procesos|Flowcharts & process modeling'] },
  { key: 'devops', items: ['GitHub', 'GitFlow', 'CI/CD', 'GitHub Actions', 'SSH'] },
  { key: 'security', items: ['Ciberseguridad|Cybersecurity', 'NIST CSF 2.0', 'ISO 27001', 'Seguridad de aplicaciones web|Web application security', 'Ethical hacking', 'Pruebas de penetración|Penetration testing', 'Evaluación de vulnerabilidades|Vulnerability assessment', 'Seguridad de redes|Network security'] },
  { key: 'infra', items: ['Redes|Networking', 'Switching', 'Storage empresarial|Enterprise storage', 'Microsoft Visio'] },
  { key: 'ai', items: ['Orquestación de agentes de IA|AI agent orchestration', 'Orca', 'Claude Code', 'Codex', 'IA generativa|Generative AI', 'Prompt engineering'] },
  { key: 'people', items: ['Liderazgo técnico|Technical leadership', 'Estrategia|Strategy', 'Ventas|Sales'] },
]

// Proyectos y casos (de 1 a 6 funciona bien).
// `key`: identificador único, sin espacios. `image`: captura en src/assets/projects/ sin extensión
//   (si no existe, se dibuja la ilustración `art` de src/components/Decor.jsx).
// Fotos de evidencia: cópialas a src/assets/galeria/<key>/ y aparecen solas en /proyectos.
// `live` / `code`: enlaces públicos (opcionales; si no hay, no se muestra botón externo).
// `tabs`: pestañas de /proyectos donde aparece: software, security, infra.
// `tint`: color de fondo del marco de la captura.
// Los textos de cada caso están en content.<idioma>.projects.items.<key>.
export const projects = [
  { key: 'nistrack', name: 'NISTrack', image: 'nistrack', art: 'deploy', live: 'https://www.nistrack.com', year: '2026', tags: ['Laravel', 'SaaS multitenant|Multi-tenant SaaS', 'NIST CSF 2.0', 'ISO 27001', 'RBAC · 2FA'], tabs: ['software', 'security'], tint: '#dfe3f1' },
  { key: 'erp', name: 'ERP Cloud Tecnologies', image: 'erp', art: 'erp', year: '2026', tags: ['Laravel', 'React + Inertia', 'IA · Gemini|AI · Gemini', 'GitHub Actions'], tabs: ['software', 'security'], tint: '#e3e6ec' },
  { key: 'termometro', name: 'Termómetro de Resiliencia|Resilience Thermometer', image: 'termometro', art: 'termometro', live: 'https://termometro.cloud-tecnologies.pe', year: '2026', tags: ['NIST SP 800-34', 'TanStack Start', 'PostgreSQL', 'PDF en servidor|Server-side PDF'], tabs: ['software', 'security'], tint: '#e7e5e2' },
  { key: 'web-cloud', name: 'Web Cloud Tecnologies|Cloud Tecnologies website', image: 'web-cloud', art: 'deploy', live: 'https://www.cloud-tecnologies.pe', year: '2026', tags: ['Astro', 'Preact', 'WebGL', 'Vercel'], tabs: ['software'], tint: '#ece6e0' },
  { key: 'iestp', name: 'Infraestructura IESTP|IESTP infrastructure', image: 'iestp', art: 'network', tags: ['Huawei OceanStor Dorado 3000 V6', 'Switching', 'Microsoft Visio'], tabs: ['infra'], tint: '#e4e2ea' },
]

// Muro del inicio: 4 columnas de piezas.
// { img: 'nombre' } → foto de src/assets/wall/nombre.(webp|png|jpg); si no existe, no se muestra.
// { video: 'nombre' } → video corto de src/assets/wall/nombre.(mp4|webm), sin sonido y en bucle.
//   Si existe src/assets/wall/nombre.(webp|jpg|png) se usa como imagen previa mientras carga.
// { tall: true } → vertical. { wide: true } → 16:9. { natural: true } → respeta la proporción de la imagen.
// { code: 'deploy'|'gitflow'|'network' } → ilustración. { text: true } → texto del muro.
// { agents: true } → terminal animada con el flujo de trabajo con agentes (textos en content.<idioma>.wall.agents).
// Usa fotos que no aparezcan en otra parte del sitio, para no repetirlas.
export const wall = [
  [{ text: true }, { img: 'hackathon-inicio' }, { img: 'github-contribuciones', natural: true }],
  [{ img: 'infra-2', tall: true }],
  [{ video: 'dc-racks', tall: true }],
  [{ agents: true }, { video: 'dc-acceso', wide: true }, { img: 'github-actions', natural: true }],
]

export const tabs = ['all', 'software', 'security', 'infra']

export const content = {
  es: {
    meta: { title: 'Rodrigo Cruz | Tech Lead · Desarrollo con agentes de IA y ciberseguridad', description: 'Portafolio de Rodrigo Cruz, Tech Lead en Cloud Tecnologies (Piura, Perú). Diseña sistemas con fundamentos de ingeniería y los construye orquestando agentes de IA, con foco en ciberseguridad, CI/CD e infraestructura.' },
    skip: 'Saltar al contenido',
    langButton: 'Switch to English',
    tagline: 'tech lead · ingeniería con IA',
    nav: { main: 'Navegación principal', social: 'Redes y contacto' },
    dock: { works: 'proyectos', about: 'sobre mí', links: 'links', allWorks: 'Todos los casos' },
    links: { linkedin: 'LinkedIn', email: 'Email', github: 'GitHub', cv: 'CV' },
    hero: {
      hello: 'Hola, soy Rodrigo Cruz',
      // [texto, palabras que rotan en la píldora azul]
      headline: ['Orquesto agentes de IA para construir software', ['seguro', 'automatizado', 'mantenible']],
      side: 'Tech Lead en Cloud Tecnologies. Ingeniería primero; la IA, mi equipo.',
      cta: { works: 'Ver proyectos', contact: 'Contactar', cv: 'Descargar CV' },
    },
    projects: {
      more: 'cada caso separa mi aporte del trabajo del equipo',
      newTab: 'abre en una pestaña nueva',
      cta: 'Ver caso',
      sections: { context: 'Contexto', problem: 'Reto', role: 'Mi participación', team: 'Equipo y alcance', evidence: 'Evidencias', gallery: 'Fotos', more: 'Ver {n} más', less: 'Ver menos' },
      items: {
        nistrack: {
          org: 'Cloud Tecnologies', badge: 'Tech Lead · Desarrollo',
          title: 'Lidero técnicamente una plataforma SaaS de madurez en ciberseguridad',
          stats: ['591 commits', '61 PRs fusionados', '106 subcategorías NIST'],
          desc: 'SaaS multitenant para evaluar la madurez, gestionar riesgos y dar seguimiento al cumplimiento con NIST CSF 2.0 e ISO 27001.',
          context: 'Producto de Cloud Tecnologies; su web de presentación es nistrack.com. Trabajo en él desde febrero de 2026.',
          problem: 'Las organizaciones necesitan medir su madurez en ciberseguridad, gestionar sus riesgos y seguir su cumplimiento.',
          role: [
            'Liderazgo técnico: defino qué se construye, reparto el trabajo y reviso e integro los cambios con GitFlow.',
            'Seguridad: aislamiento entre organizaciones, RBAC, límite de peticiones, cookies HttpOnly, sanitización XSS, login endurecido y 2FA.',
            'Módulo de riesgos, dashboard gerencial y valoración de activos (v2.0 y v2.1).',
            'Catálogo NIST CSF 2.0 migrado a sus 106 subcategorías, en datos, backend y frontend.',
            'Rediseño de los reportes PDF y de la landing, con un widget de radar NIST.',
            'Integración con n8n y Google Drive para generar los entregables.',
            'Producción: consultas SQL optimizadas, dashboards sin agotar la memoria y parches de CVE que bloqueaban el despliegue.',
          ],
          team: 'Somos tres: dos desarrolladores junior y yo. Firmo 591 de los 1216 commits (~49 %) y abrí 61 Pull Requests, todos fusionados. El resto lo construyeron ellos.',
          evidence: [{ label: 'Sitio de presentación del producto: nistrack.com (la plataforma requiere cuenta)', href: 'https://www.nistrack.com' }, { label: 'Publicación sobre NISTrack en la actividad de mi perfil de LinkedIn', href: contact.linkedin }, { label: 'Historial de git (repositorio privado): 591 commits, feb.–nov. 2026' }],
        },
        erp: {
          org: 'Cloud Tecnologies · uso interno', badge: 'Dueño del repositorio · Desarrollo',
          title: 'Construí el ERP interno y dirijo su V2, hecha con agentes de IA',
          stats: ['571 pruebas automatizadas', '58 PRs', '16 días (V2)'],
          desc: 'ERP interno de la empresa: proyectos, cotizaciones, finanzas y tareas. Es privado: solo muestro el inicio de sesión.',
          context: 'Uso interno de Cloud Tecnologies. V1 desde enero de 2026, entre tres personas; V2 desde octubre de 2026, para migrar el sistema.',
          problem: 'Reunir la gestión interna en un solo sistema y, en la V2, rehacerlo con pruebas automatizadas, integración continua y documentación.',
          role: [
            'V2: migración a Laravel con React e Inertia orquestando agentes de IA: 142 commits, 58 PRs y 571 pruebas en 16 días, con CI en GitHub Actions y decisiones documentadas.',
            'V1: base del sistema con despliegue automático desde el inicio.',
            'V1: módulo de Proyectos con Kanban, y dashboard con radar de riesgos e indicadores.',
            'V1: correcciones de seguridad tras una prueba con Kali Linux, y 2FA por TOTP (RFC 6238).',
            'V1: asistente con IA (Gemini) que responde sobre los datos reales del ERP.',
            'V1: indicadores de ingresos en dos monedas corregidos y formato de divisa en todas las vistas.',
            'V1: despliegue en cPanel con un único script SQL, y cierre de una fuga de logs y archivos de prueba.',
          ],
          team: 'V1: éramos tres; firmé 76 de los 120 commits (~73 % del código propio vigente). Ellos hicieron cotizaciones, el motor financiero, las alertas por correo, el arrastrar y soltar del Kanban y los reportes PDF. V2: soy el único desarrollador humano; trabajo con agentes de IA, defino el trabajo y reviso y fusiono los 58 PRs.',
          evidence: [{ label: 'Historial de git de los dos repositorios (privados)' }],
        },
        termometro: {
          org: 'Cloud Tecnologies', badge: 'Líder técnico · Desarrollo',
          title: 'Lideré un diagnóstico gratuito de resiliencia ante el Fenómeno El Niño',
          stats: ['20 preguntas', '~5 min', 'Informe PDF'],
          desc: 'Diagnóstico gratuito ante El Niño y otras interrupciones: 20 preguntas, unos 5 minutos, informe PDF y sin crear cuenta.',
          context: 'Herramienta pública basada en NIST SP 800-34 Rev.1 y adaptada a la costa norte del Perú. Jul.–oct. 2026; en el CEO Summit 2026 la mostré a otros asistentes en los espacios de networking.',
          problem: 'Sin conocer sus brechas, una organización descubre sus puntos débiles cuando la contingencia ya ocurrió.',
          role: [
            'Liderazgo técnico: definí qué hacía cada desarrollador junior, programé junto a ellos y revisé sus cambios.',
            'Salida a producción: revisé y programé los ajustes finales, y publiqué la herramienta.',
            'Base del proyecto, flujo público del diagnóstico e informe PDF generado en el servidor con trabajos en cola.',
            'Panel de administración: roles, leads (papelera, reenvío y exportación), indicadores y catálogo con los campos de cálculo bloqueados.',
            'Aviso por correo al equipo por cada lead nuevo.',
            'Despliegue continuo del backend por FTP con lftp.',
            'Seguridad: TanStack Start actualizado por una vulnerabilidad XSS, y aviso de cookies fiel a lo que hace el sitio.',
          ],
          team: 'Somos tres: dos desarrolladores junior y yo. Firmé unos 52 commits; ellos, 40 y 6. Es una evaluación preliminar: no reemplaza una auditoría ni certifica la continuidad del negocio.',
          evidence: [{ label: 'Herramienta pública: termometro.cloud-tecnologies.pe', href: 'https://termometro.cloud-tecnologies.pe' }, { label: 'Historial de git: unos 52 commits míos, jul.–oct. 2026' }],
        },
        'web-cloud': {
          org: 'Cloud Tecnologies', badge: 'Autor principal',
          title: 'Rediseñé y optimicé la web corporativa de la empresa',
          stats: ['34 de 47 commits', '−712 KB de imágenes', 'Canvas 2D → WebGL'],
          desc: 'Landing corporativa de la empresa, construida con Astro.',
          context: 'Sitio público en cloud-tecnologies.pe. Trabajé en él entre junio y septiembre de 2026.',
          problem: 'Que cargue rápido, funcione bien en el móvil y lleve al visitante a pedir un diagnóstico.',
          role: [
            'Rendimiento: animación principal de Canvas 2D a WebGL, React → Preact, sin framer-motion y 712 KB menos de imágenes.',
            'Base en Astro y rediseño de la landing, primero en tema oscuro y luego en claro.',
            'Estabilidad: errores críticos del formulario, fugas de memoria y parpadeo de las tarjetas 3D.',
            'Copy reescrito y formulario a un clic de la llamada a la acción.',
            'Auditoría por fases (animaciones, experiencia de uso, SEO básico, código muerto), optimización móvil y despliegue en Vercel.',
          ],
          team: 'Firmo 34 de los 47 commits de la rama principal. Un compañero aportó GSAP, el globo 3D, la red de partners, efectos visuales, las páginas de servicios y las transiciones; yo revisé e integré su trabajo.',
          evidence: [{ label: 'Sitio público: cloud-tecnologies.pe', href: 'https://www.cloud-tecnologies.pe' }, { label: 'Historial de git: 34 de los 47 commits de la rama principal' }],
        },
        iestp: {
          org: 'Colaborador externo', badge: 'Apoyo en implementación',
          title: 'Apoyé la instalación de almacenamiento empresarial y red en un instituto',
          stats: ['Huawei Dorado 3000 V6', 'Switches por consola', 'Diagramas en Visio'],
          desc: 'Instalación del storage Huawei OceanStor Dorado 3000 V6, puntos de acceso, switches por consola y documentación de la red.',
          context: 'IESTP (instituto de educación superior tecnológico), como colaborador externo del equipo de implementación.',
          problem: 'Poner en marcha el almacenamiento y dejar la red conectada, rotulada y documentada.',
          role: [
            'Instalación física de los discos del storage y apoyo en su implementación.',
            'Cableado, ordenamiento y rotulado de gabinetes, conexiones y puertos.',
            'Conexión de puntos de acceso (AP) y comprobación de encendido.',
            'Configuración de switches por consola, según el procedimiento del proyecto.',
            'Inventario y diagramas físicos y lógicos en Microsoft Visio.',
          ],
          team: 'Los gabinetes y los enlaces de fibra al centro de datos ya estaban instalados. El diseño y la implementación integral del centro de datos no estuvieron a mi cargo.',
          evidence: [{ label: 'Fotos y videos de la instalación en el muro del inicio' }],
        },
      },
    },
    story: {
      title: ['Me importa cómo se construye', 'y cómo llega a producción'],
      tap: 'toca cada punto',
      intro: [{ t: 'Busco que el software del equipo sea ' }, { b: 'ordenado' }, { t: ' en su flujo, ' }, { b: 'seguro' }, { t: ' desde el desarrollo y ' }, { b: 'automatizado' }, { t: ' al desplegar.' }],
      nodes: {
        ordered: { label: 'Ordenado', text: [{ b: 'Ordenado:' }, { t: ' ramas con GitFlow y Pull Requests revisados antes de integrar.' }] },
        ai: { label: 'IA', text: [{ b: 'IA:' }, { t: ' yo defino cómo debe comportarse el sistema; varios agentes de IA escriben el código y yo lo valido con pruebas y revisión.' }] },
        secure: { label: 'Seguro', text: [{ b: 'Seguro:' }, { t: ' quiero llevar más prácticas de seguridad al ciclo de desarrollo; hacia ahí apunto con DevSecOps.' }] },
        cicd: { label: 'CI/CD', text: [{ b: 'CI/CD:' }, { t: ' despliegues con GitHub Actions y SSH en lugar de pasos manuales.' }] },
      },
    },
    wall: {
      label: 'Del código al gabinete',
      text: [{ h: 'También trabajo en campo' }, { t: ': instalé discos de un storage empresarial, configuré switches por consola y ' }, { h: 'documenté la red en diagramas.' }],
      agents: {
        file: 'erp-v2 · así trabajo',
        lines: [['$ ', 'yo: specs + criterios'], ['⇉ ', 'agentes de IA en paralelo'], ['✓ ', '571 pruebas automatizadas'], ['✓ ', 'CI · GitHub Actions'], ['✓ ', '58 PRs revisados por mí']],
        note: 'ilustración · cifras reales del ERP V2',
      },
    },
    closing: { note: 'contacto', title: '¿Conversamos sobre tu equipo o proyecto?', write: 'Escríbeme', location: 'Piura, Perú' },
    works: {
      title: 'Proyectos y casos',
      subtitle: 'Reto, mi participación y lo que hizo el equipo.',
      tabs: { all: 'Todos', software: 'Software', security: 'Ciberseguridad', infra: 'Infraestructura' },
      tabNotes: { all: 'Software SaaS, ciberseguridad e infraestructura en campo.', software: 'Productos y herramientas en los que lideré o desarrollé.', security: 'Soluciones orientadas a riesgo, cumplimiento y resiliencia.', infra: 'Trabajo práctico con almacenamiento, switching y documentación de redes.' },
    },
    about: {
      note: 'sobre mí',
      title: 'Un poco más sobre mí',
      intro: [{ t: 'Estudiante de Ingeniería de Sistemas e Informática y ' }, { b: 'Tech Lead en Cloud Tecnologies' }, { t: '. Desarrollo software ' }, { h: 'orquestando agentes de IA' }, { t: ', con foco en ciberseguridad y automatización.' }],
      caption: 'Rodrigo Cruz · Piura',
      photoHint: 'Piura, Perú',
      items: [
        { icon: 'burst', title: 'Hoy en Cloud Tecnologies', text: 'Coordino al equipo, gestiono el código con GitFlow, reviso los cambios e implemento CI/CD.' },
        { icon: 'spark', title: 'Ingeniería primero, la IA como equipo', text: 'Defino cómo debe comportarse el sistema con fundamentos de ingeniería; orquesto agentes en paralelo (Orca, Claude Code, Codex) y valido con pruebas, CI y revisión. No escribo cada línea, pero entiendo el código y sé qué tiene que hacer.' },
        { icon: 'server', title: 'También en campo', text: 'Storage empresarial, switches por consola, puntos de acceso, inventarios y diagramas de red.' },
        { icon: 'shield', title: 'Hacia DevSecOps y Cloud', text: 'Llevar más seguridad al ciclo de desarrollo y crecer hacia DevSecOps y Cloud.' },
      ],
      skillsTitle: 'Habilidades',
      skillsNote: 'por áreas',
      groups: { dev: 'Desarrollo', devops: 'Repositorios y despliegue', security: 'Ciberseguridad', infra: 'Infraestructura', ai: 'IA y agentes', people: 'Liderazgo y negocio' },
      experienceTitle: 'Experiencia',
      experienceNote: 'trayectoria',
      current: 'actual',
      caseLink: 'Ver caso',
      jobs: [
        {
          role: 'Tech Lead', company: 'Cloud Tecnologies', place: 'Piura, Perú', period: 'Desde ene. 2026', mode: 'Tiempo parcial · Híbrido', current: true,
          note: 'Asumí formalmente el cargo en enero de 2026, tras más de un año como desarrollador en la empresa.',
          groups: [
            { title: 'Liderazgo técnico', points: ['Dirijo a dos desarrolladores junior y construyo con ellos NISTrack, el Termómetro de Resiliencia y el ERP interno.', 'Defino requerimientos, oriento las decisiones técnicas y ayudo a resolver bloqueos.'] },
            { title: 'Código y revisión', points: ['GitFlow en GitHub y revisión de Pull Requests, también los de agentes de IA, antes de integrar.'] },
            { title: 'Despliegues y operación', points: ['Pipelines con GitHub Actions y despliegues por SSH en lugar de pasos manuales.', 'Participo en el mantenimiento de la infraestructura interna y en la administración de la base de datos de producción.'] },
          ],
        },
        {
          role: 'Colaborador externo · Infraestructura', company: 'IESTP', place: 'Instituto de educación superior tecnológico', period: '2026', caseKey: 'iestp',
          groups: [
            { points: ['Instalación de los discos del storage Huawei OceanStor Dorado 3000 V6 y apoyo en su implementación.', 'Puntos de acceso, switches por consola, rotulado, inventario y diagramas en Microsoft Visio.'] },
          ],
        },
        {
          role: 'Desarrollador de software', company: 'Cloud Tecnologies', place: 'Piura, Perú', period: 'Oct. 2024 – dic. 2025',
          note: 'Entré como desarrollador; además de programar, ya coordinaba parte del trabajo técnico del equipo.',
          groups: [],
        },
        {
          role: 'Soporte técnico integral', company: 'Think Solutions SCRL', period: 'Feb. 2024 – oct. 2024',
          groups: [
            { points: ['Soporte de niveles 1 y 2 y diagnóstico de incidencias.', 'Mantenimiento de hardware y software, ensamblaje y configuración de equipos.'] },
          ],
        },
      ],
      educationTitle: 'Educación',
      education: { short: 'UTP', degree: 'Ingeniería de Sistemas e Informática', school: 'Universidad Tecnológica del Perú', period: '2022 — 2026', points: ['Estudiante'] },
      certsTitle: 'Certificaciones',
      certsNote: 'formación',
      certLabels: { issued: 'Emitido', expires: 'vence', expired: 'Vencida', id: 'ID', view: 'Ver certificado', history: 'Formación anterior', records: 'Constancias de participación', viewRecord: 'Ver constancia' },
      certs: [
        { title: 'Ethical Hacking Professional Certification (CEHPC™)', org: 'CertiProf', issued: '22 mar. 2026', expires: '21 mar. 2029', id: 'JLRRFLDSRPL-WWQKKCTVQ-YQTSJJBWBR', href: 'https://drive.google.com/file/d/1QPMuw2qARPjMb4fRz8XAN1TEabsmmGH_/view?usp=sharing', highlight: true },
        { title: 'Sophos Certification', org: 'Sophos', issued: 'mar. 2024', expires: 'ene. 2026', id: 'ET15-Sophos-v5.0', expired: true },
        { title: 'Fortinet Network Security Expert Level 3: Certified Associate', org: 'Fortinet', issued: 'dic. 2023', expires: 'dic. 2024', id: '6426880590RC', expired: true },
        { title: 'Fortinet Network Security Expert Level 1: Certified Associate', org: 'Fortinet', issued: 'ene. 2023', expires: 'dic. 2025', id: '9943349093RC', expired: true },
      ],
      records: [
        { title: 'Hackathon Regional de Innovación Piura Innova 2026', org: 'GDG Piura y Cámara de Comercio y Producción de Piura', issued: '11 oct. 2026', href: '/constancias/piura-innova-2026-hackathon.pdf' },
        { title: 'Charla «Piura Innovadora» · Semana de Capacitación Piura Innova 2026', org: 'GDG Piura y Cámara de Comercio y Producción de Piura', issued: '5 oct. 2026', href: '/constancias/piura-innova-2026-charla.pdf' },
      ],
      eventsTitle: 'Eventos',
      eventsNote: 'donde he estado',
      events: [
        { key: 'piura-innova', title: 'Hackathon Regional de Innovación Piura Innova 2026', meta: '10 y 11 oct. 2026 · Piura', role: 'Participante · líder técnico del equipo Cloud Tecnologies', text: 'Organizada por GDG Piura y la Cámara de Comercio de Piura. En el Reto 6 (Corpotex) propusimos KeptAI, para conciliar pagos recibidos por WhatsApp y calcular la rentabilidad por pedido. Lideré la parte técnica, hice el frontend (React + TypeScript) y corregí errores del backend.' },
        { key: 'ceo-summit', title: 'CEO Summit 2026 · Empresas Resilientes', meta: 'Casa Andina, Piura · Cámara de Comercio de Piura', role: 'Asistente en representación de Cloud Tecnologies', text: 'Charlas sobre resiliencia y continuidad empresarial, networking y conversaciones sobre el Termómetro de Resiliencia Operativa.', caseKey: 'termometro' },
      ],
      cv: { note: 'CV', title: 'Mi CV', text: 'Experiencia, educación, habilidades y certificaciones en PDF.', open: 'Ver CV', download: 'Descargar PDF' },
      dragHint: 'arrástrame',
    },
    footer: 'Hecho con React, Tailwind CSS y Motion.',
  },
  en: {
    meta: { title: 'Rodrigo Cruz | Tech Lead · AI-agent development and cybersecurity', description: 'Portfolio of Rodrigo Cruz, Tech Lead at Cloud Tecnologies (Piura, Peru). He designs systems with engineering fundamentals and builds them by orchestrating AI agents, with a focus on cybersecurity, CI/CD and infrastructure.' },
    skip: 'Skip to content',
    langButton: 'Cambiar a español',
    tagline: 'tech lead · AI-native engineering',
    nav: { main: 'Main navigation', social: 'Social and contact' },
    dock: { works: 'projects', about: 'about', links: 'links', allWorks: 'All case studies' },
    links: { linkedin: 'LinkedIn', email: 'Email', github: 'GitHub', cv: 'Resume' },
    hero: {
      hello: "Hi, I'm Rodrigo Cruz",
      headline: ['I orchestrate AI agents to build software that is', ['secure', 'automated', 'maintainable']],
      side: 'Tech Lead at Cloud Tecnologies. Engineering first; AI is my team.',
      cta: { works: 'View projects', contact: 'Get in touch', cv: 'Download resume' },
    },
    projects: {
      more: 'each case separates my contribution from the team’s work',
      newTab: 'opens in a new tab',
      cta: 'View case',
      sections: { context: 'Context', problem: 'Challenge', role: 'My role', team: 'Team and scope', evidence: 'Evidence', gallery: 'Photos', more: 'Show {n} more', less: 'Show less' },
      items: {
        nistrack: {
          org: 'Cloud Tecnologies', badge: 'Tech Lead · Development',
          title: 'I am the technical lead of a cybersecurity maturity SaaS platform',
          stats: ['591 commits', '61 merged PRs', '106 NIST subcategories'],
          desc: 'Multi-tenant SaaS to assess maturity, manage risk and track compliance with NIST CSF 2.0 and ISO 27001.',
          context: 'A Cloud Tecnologies product; its presentation website is nistrack.com. I have worked on it since February 2026.',
          problem: 'Organizations need to measure their cybersecurity maturity, manage their risks and track their compliance.',
          role: [
            'Technical leadership: I decide what gets built, split the work and review and merge changes with GitFlow.',
            'Security: tenant isolation, RBAC, rate limiting, HttpOnly cookies, XSS sanitization, login hardening and 2FA.',
            'Risk module, management dashboard and asset valuation (v2.0 and v2.1).',
            'NIST CSF 2.0 catalog migrated to its 106 subcategories, across data, backend and frontend.',
            'Redesign of the PDF reports and the landing page, with a NIST radar widget.',
            'Integration with n8n and Google Drive to produce the deliverables.',
            'Production: optimized SQL queries, dashboards that no longer run out of memory, and CVE patches that blocked deployment.',
          ],
          team: 'We are three: two junior developers and me. I authored 591 of the 1,216 commits (~49%) and opened 61 Pull Requests, all merged. They built the rest.',
          evidence: [{ label: 'Product presentation site: nistrack.com (the platform requires an account)', href: 'https://www.nistrack.com' }, { label: 'Post about NISTrack in my LinkedIn profile activity', href: contact.linkedin }, { label: 'Git history (private repository): 591 commits, Feb–Nov 2026' }],
        },
        erp: {
          org: 'Cloud Tecnologies · internal use', badge: 'Repository owner · Development',
          title: 'I built the internal ERP and I lead its V2, built with AI agents',
          stats: ['571 automated tests', '58 PRs', '16 days (V2)'],
          desc: 'The company’s internal ERP: projects, quotes, finance and tasks. It is private: I only show the login screen.',
          context: 'Internal Cloud Tecnologies tool. V1 since January 2026, among three people; V2 since October 2026, to migrate the system.',
          problem: 'Bring internal management into a single system and, in V2, rebuild it with automated tests, continuous integration and documentation.',
          role: [
            'V2: migration to Laravel with React and Inertia by orchestrating AI agents: 142 commits, 58 PRs and 571 tests in 16 days, with CI on GitHub Actions and documented decisions.',
            'V1: the system’s foundation, with automatic deployment from the start.',
            'V1: Projects module with Kanban, and a dashboard with a risk radar and indicators.',
            'V1: security fixes after a test with Kali Linux, and TOTP two-factor authentication (RFC 6238).',
            'V1: AI assistant (Gemini) that answers questions about the ERP’s real data.',
            'V1: fixed two-currency revenue indicators and currency formatting across every view.',
            'V1: cPanel deployment with a single SQL script, and closing a leak of logs and test files.',
          ],
          team: 'V1: there were three of us; I authored 76 of the 120 commits (~73% of the project’s own live code). They built quotes, the financial engine, email alerts, the Kanban drag and drop and the PDF reports. V2: I am the only human developer; I work with AI agents, define the work and review and merge the 58 PRs.',
          evidence: [{ label: 'Git history of both (private) repositories' }],
        },
        termometro: {
          org: 'Cloud Tecnologies', badge: 'Technical lead · Development',
          title: 'I led a free El Niño resilience check',
          stats: ['20 questions', '~5 min', 'PDF report'],
          desc: 'A free readiness check for El Niño and other disruptions: 20 questions, about 5 minutes, a PDF report and no account needed.',
          context: 'A public tool based on NIST SP 800-34 Rev.1 and adapted to Peru’s northern coast. Jul–Oct 2026; at CEO Summit 2026 I showed it to other attendees during networking.',
          problem: 'Without knowing its gaps, an organization finds its weak spots once the contingency has already happened.',
          role: [
            'Technical leadership: I assigned the junior developers’ work, coded alongside them and reviewed their changes.',
            'Release: I reviewed and coded the final adjustments, and published the tool.',
            'Project foundation, the public assessment flow and a server-side PDF report with queued jobs.',
            'Admin panel: roles, leads (trash, resend and export), indicators and a catalog with the scoring fields locked.',
            'Email alert to the team for every new lead.',
            'Continuous deployment of the backend over FTP with lftp.',
            'Security: TanStack Start updated for an XSS vulnerability, and a cookie notice true to what the site does.',
          ],
          team: 'We are three: two junior developers and me. I authored about 52 commits; my teammates, 40 and 6. It is a preliminary assessment: it does not replace an audit or certify business continuity.',
          evidence: [{ label: 'Public tool: termometro.cloud-tecnologies.pe', href: 'https://termometro.cloud-tecnologies.pe' }, { label: 'Git history: about 52 commits of mine, Jul–Oct 2026' }],
        },
        'web-cloud': {
          org: 'Cloud Tecnologies', badge: 'Lead author',
          title: 'I redesigned and optimized the company’s corporate website',
          stats: ['34 of 47 commits', '−712 KB of images', 'Canvas 2D → WebGL'],
          desc: 'The company’s corporate landing page, built with Astro.',
          context: 'Public website at cloud-tecnologies.pe. I worked on it between June and September 2026.',
          problem: 'Load fast, work well on mobile and lead visitors to request an assessment.',
          role: [
            'Performance: main animation moved from Canvas 2D to WebGL, React → Preact, no framer-motion and 712 KB fewer images.',
            'Astro foundation and landing redesign, first in a dark theme and then in a light one.',
            'Stability: critical form bugs, memory leaks and flickering 3D cards.',
            'Rewritten copy and the form one click away from the call to action.',
            'Phased audit (animations, user experience, basic SEO, dead code), mobile optimization and Vercel deployment.',
          ],
          team: 'I authored 34 of the 47 commits on the main branch. A teammate contributed GSAP, the 3D globe, the partners network, visual effects, the service pages and the transitions; I reviewed and integrated their work.',
          evidence: [{ label: 'Public website: cloud-tecnologies.pe', href: 'https://www.cloud-tecnologies.pe' }, { label: 'Git history: 34 of the 47 commits on the main branch' }],
        },
        iestp: {
          org: 'External collaborator', badge: 'Implementation support',
          title: 'I supported an enterprise storage and network install at an institute',
          stats: ['Huawei Dorado 3000 V6', 'Console-configured switches', 'Visio diagrams'],
          desc: 'Installing the Huawei OceanStor Dorado 3000 V6 storage, access points, console-configured switches and network documentation.',
          context: 'IESTP (a technical higher-education institute), as an external collaborator on the implementation team.',
          problem: 'Bring the storage online and leave the network connected, labeled and documented.',
          role: [
            'Physically installing the storage disks and supporting its implementation.',
            'Cabling, organizing and labeling cabinets, connections and ports.',
            'Connecting access points (APs) and checking they powered on.',
            'Configuring switches over console, following the project’s procedure.',
            'Inventory and physical and logical diagrams in Microsoft Visio.',
          ],
          team: 'The cabinets and fiber links to the data center were already installed. The design and full implementation of the data center were not my responsibility.',
          evidence: [{ label: 'Photos and videos of the installation on the home page wall' }],
        },
      },
    },
    story: {
      title: ['I care about how software is built', 'and how it reaches production'],
      tap: 'tap each point',
      intro: [{ t: 'I want the team’s software to be ' }, { b: 'organized' }, { t: ' in its workflow, ' }, { b: 'secure' }, { t: ' from development and ' }, { b: 'automated' }, { t: ' when deploying.' }],
      nodes: {
        ordered: { label: 'Organized', text: [{ b: 'Organized:' }, { t: ' GitFlow branches and Pull Requests reviewed before merging.' }] },
        ai: { label: 'AI', text: [{ b: 'AI:' }, { t: ' I define how the system should behave; several AI agents write the code, and I validate it with tests and review.' }] },
        secure: { label: 'Secure', text: [{ b: 'Secure:' }, { t: ' I want to bring more security practices into the development cycle; that is where I am heading with DevSecOps.' }] },
        cicd: { label: 'CI/CD', text: [{ b: 'CI/CD:' }, { t: ' deployments with GitHub Actions and SSH instead of manual steps.' }] },
      },
    },
    wall: {
      label: 'From code to the cabinet',
      text: [{ h: 'I also work on site' }, { t: ': I installed disks in an enterprise storage system, configured switches over console and ' }, { h: 'documented the network in diagrams.' }],
      agents: {
        file: 'erp-v2 · how I work',
        lines: [['$ ', 'me: specs + criteria'], ['⇉ ', 'AI agents in parallel'], ['✓ ', '571 automated tests'], ['✓ ', 'CI · GitHub Actions'], ['✓ ', '58 PRs reviewed by me']],
        note: 'illustration · real figures from ERP V2',
      },
    },
    closing: { note: 'contact', title: 'Shall we talk about your team or project?', write: 'Email me', location: 'Piura, Peru' },
    works: {
      title: 'Projects and case studies',
      subtitle: 'Challenge, my role and what the team did.',
      tabs: { all: 'All', software: 'Software', security: 'Cybersecurity', infra: 'Infrastructure' },
      tabNotes: { all: 'SaaS software, cybersecurity and on-site infrastructure.', software: 'Products and tools I led or built.', security: 'Solutions focused on risk, compliance and resilience.', infra: 'Hands-on work with storage, switching and network documentation.' },
    },
    about: {
      note: 'about me',
      title: 'A little more about me',
      intro: [{ t: 'Systems and Computer Engineering student and ' }, { b: 'Tech Lead at Cloud Tecnologies' }, { t: '. I build software by ' }, { h: 'orchestrating AI agents' }, { t: ', with a focus on cybersecurity and automation.' }],
      caption: 'Rodrigo Cruz · Piura',
      photoHint: 'Piura, Peru',
      items: [
        { icon: 'burst', title: 'Today at Cloud Tecnologies', text: 'I coordinate the team, manage code with GitFlow, review changes and set up CI/CD.' },
        { icon: 'spark', title: 'Engineering first, AI as my team', text: 'I define how the system should behave using engineering fundamentals; I orchestrate agents in parallel (Orca, Claude Code, Codex) and validate with tests, CI and review. I do not write every line, but I understand the code and know what it has to do.' },
        { icon: 'server', title: 'Also on site', text: 'Enterprise storage, console-configured switches, access points, inventories and network diagrams.' },
        { icon: 'shield', title: 'Heading to DevSecOps and Cloud', text: 'Bring more security into the development cycle and grow toward DevSecOps and Cloud.' },
      ],
      skillsTitle: 'Skills',
      skillsNote: 'by area',
      groups: { dev: 'Development', devops: 'Repositories & deployment', security: 'Cybersecurity', infra: 'Infrastructure', ai: 'AI & agents', people: 'Leadership & business' },
      experienceTitle: 'Experience',
      experienceNote: 'track record',
      current: 'current',
      caseLink: 'View case',
      jobs: [
        {
          role: 'Tech Lead', company: 'Cloud Tecnologies', place: 'Piura, Peru', period: 'Since Jan 2026', mode: 'Part-time · Hybrid', current: true,
          note: 'I formally took on the role in January 2026, after more than a year as a developer at the company.',
          groups: [
            { title: 'Technical leadership', points: ['I lead two junior developers and build NISTrack, the Resilience Thermometer and the internal ERP alongside them.', 'I define requirements, guide technical decisions and help unblock issues.'] },
            { title: 'Code and review', points: ['GitFlow on GitHub and Pull Request review, including those from AI agents, before merging.'] },
            { title: 'Deployments and operations', points: ['Pipelines with GitHub Actions and SSH deployments instead of manual steps.', 'I take part in maintaining internal infrastructure and administering the production database.'] },
          ],
        },
        {
          role: 'External collaborator · Infrastructure', company: 'IESTP', place: 'Technical higher-education institute', period: '2026', caseKey: 'iestp',
          groups: [
            { points: ['Installed the disks of the Huawei OceanStor Dorado 3000 V6 storage and supported its implementation.', 'Access points, console-configured switches, labeling, inventory and Microsoft Visio diagrams.'] },
          ],
        },
        {
          role: 'Software developer', company: 'Cloud Tecnologies', place: 'Piura, Peru', period: 'Oct 2024 – Dec 2025',
          note: 'I joined as a developer; besides coding, I was already coordinating part of the team’s technical work.',
          groups: [],
        },
        {
          role: 'Technical support', company: 'Think Solutions SCRL', period: 'Feb 2024 – Oct 2024',
          groups: [
            { points: ['Level 1 and 2 support and troubleshooting.', 'Hardware and software maintenance, PC assembly and configuration.'] },
          ],
        },
      ],
      educationTitle: 'Education',
      education: { short: 'UTP', degree: 'Systems and Computer Engineering', school: 'Universidad Tecnológica del Perú', period: '2022 — 2026', points: ['Student'] },
      certsTitle: 'Certifications',
      certsNote: 'training',
      certLabels: { issued: 'Issued', expires: 'expires', expired: 'Expired', id: 'ID', view: 'View certificate', history: 'Past training', records: 'Certificates of participation', viewRecord: 'View certificate' },
      certs: [
        { title: 'Ethical Hacking Professional Certification (CEHPC™)', org: 'CertiProf', issued: 'Mar 22, 2026', expires: 'Mar 21, 2029', id: 'JLRRFLDSRPL-WWQKKCTVQ-YQTSJJBWBR', href: 'https://drive.google.com/file/d/1QPMuw2qARPjMb4fRz8XAN1TEabsmmGH_/view?usp=sharing', highlight: true },
        { title: 'Sophos Certification', org: 'Sophos', issued: 'Mar 2024', expires: 'Jan 2026', id: 'ET15-Sophos-v5.0', expired: true },
        { title: 'Fortinet Network Security Expert Level 3: Certified Associate', org: 'Fortinet', issued: 'Dec 2023', expires: 'Dec 2024', id: '6426880590RC', expired: true },
        { title: 'Fortinet Network Security Expert Level 1: Certified Associate', org: 'Fortinet', issued: 'Jan 2023', expires: 'Dec 2025', id: '9943349093RC', expired: true },
      ],
      records: [
        { title: 'Piura Innova 2026 Regional Innovation Hackathon', org: 'GDG Piura and the Piura Chamber of Commerce and Production', issued: 'Oct 11, 2026', href: '/constancias/piura-innova-2026-hackathon.pdf' },
        { title: '“Piura Innovadora” talk · Piura Innova 2026 Training Week', org: 'GDG Piura and the Piura Chamber of Commerce and Production', issued: 'Oct 5, 2026', href: '/constancias/piura-innova-2026-charla.pdf' },
      ],
      eventsTitle: 'Events',
      eventsNote: 'where I have been',
      events: [
        { key: 'piura-innova', title: 'Piura Innova 2026 Regional Innovation Hackathon', meta: 'Oct 10–11, 2026 · Piura', role: 'Participant · technical lead of the Cloud Tecnologies team', text: 'Organized by GDG Piura and the Piura Chamber of Commerce. For Challenge 6 (Corpotex) we proposed KeptAI, to reconcile payments received through WhatsApp and calculate profit per order. I led the technical side, built the frontend (React + TypeScript) and fixed backend bugs.' },
        { key: 'ceo-summit', title: 'CEO Summit 2026 · Resilient Companies', meta: 'Casa Andina, Piura · Piura Chamber of Commerce', role: 'Attendee representing Cloud Tecnologies', text: 'Talks on business resilience and continuity, networking and conversations about the Operational Resilience Thermometer.', caseKey: 'termometro' },
      ],
      cv: { note: 'resume', title: 'My resume', text: 'Experience, education, skills and certifications as a PDF.', open: 'View resume', download: 'Download PDF' },
      dragHint: 'drag me',
    },
    footer: 'Built with React, Tailwind CSS and Motion.',
  },
}
