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
// `cv`: cuando copies tu CV real a public/cv/cv.pdf, cambia '' por '/cv/cv.pdf'.
export const contact = {
  github: 'https://github.com/rod14x',
  linkedin: 'https://www.linkedin.com/in/rodrigo-cruz-5a9988356/',
  email: 'german.rodrigo.cruz14@gmail.com',
  cv: '',
}

// Habilidades agrupadas (sin niveles). Los nombres de los grupos están en content.<idioma>.about.groups.
export const skills = [
  { key: 'dev', items: ['TypeScript', 'JavaScript', 'PHP', 'Laravel', 'Astro', 'React.js', 'Spring Boot', 'PostgreSQL', 'Desarrollo full stack|Full-stack development', 'Desarrollo de software|Software development', 'Debugging', 'Ingeniería|Engineering'] },
  { key: 'devops', items: ['GitHub', 'GitFlow', 'CI/CD', 'SSH'] },
  { key: 'security', items: ['Ciberseguridad|Cybersecurity', 'NIST', 'ISO 27001', 'Seguridad de aplicaciones web|Web application security', 'Ethical hacking', 'Pruebas de penetración|Penetration testing', 'Evaluación de vulnerabilidades|Vulnerability assessment', 'Seguridad de redes|Network security'] },
  { key: 'infra', items: ['Redes|Networking', 'Mantenimiento de equipos|Computer maintenance'] },
  { key: 'ai', items: ['IA generativa|Generative AI', 'Prompt engineering'] },
  { key: 'people', items: ['Liderazgo técnico|Technical leadership', 'Liderazgo|Leadership', 'Trabajo en equipo|Teamwork', 'Comunicación|Communication', 'Estrategia|Strategy', 'Ventas|Sales'] },
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
// { tall: true } → vertical. { wide: true } → 16:9. { code: 'deploy'|'gitflow'|'network' } → ilustración. { text: true } → texto del muro. { burst: true } → estrella.
// Usa fotos que no aparezcan en otra parte del sitio, para no repetirlas.
export const wall = [
  [{ img: 'hackathon-inicio' }, { code: 'gitflow' }],
  [{ text: true }, { img: 'infra-2', tall: true }],
  [{ burst: true }, { video: 'dc-racks', tall: true }],
  [{ video: 'dc-acceso', wide: true }, { code: 'deploy' }],
]

export const tabs = ['all', 'software', 'security', 'infra']

export const content = {
  es: {
    meta: { title: 'Rodrigo Cruz | Tech Lead · Software, ciberseguridad e infraestructura', description: 'Portafolio de Rodrigo Cruz, Tech Lead en Cloud Tecnologies y estudiante de Ingeniería de Sistemas e Informática en Piura, Perú. Software SaaS, CI/CD, ciberseguridad e infraestructura.' },
    skip: 'Saltar al contenido',
    langButton: 'Switch to English',
    tagline: 'tech lead · ciberseguridad',
    nav: { main: 'Navegación principal', social: 'Redes y contacto' },
    dock: { works: 'proyectos', about: 'sobre mí', links: 'links', allWorks: 'Todos los casos' },
    links: { linkedin: 'LinkedIn', email: 'Email', github: 'GitHub', cv: 'CV' },
    hero: {
      hello: 'Hola, soy Rodrigo Cruz',
      headline: ['Lidero equipos que construyen y despliegan software…', 'seguro'],
      side: ['Tech Lead en Cloud Tecnologies:', 'SaaS, CI/CD, ciberseguridad e infraestructura.'],
      how: 'Okay… ¿y en qué he trabajado?',
    },
    projects: {
      more: 'cada caso separa mi aporte del trabajo del equipo',
      newTab: 'abre en una pestaña nueva',
      cta: 'Ver caso',
      sections: { context: 'Contexto', problem: 'Problema', role: 'Mi participación', team: 'Equipo y alcance', evidence: 'Evidencias', gallery: 'Fotos' },
      items: {
        nistrack: {
          org: 'Cloud Tecnologies', badge: 'Tech Lead · Desarrollo',
          title: 'Lidero técnicamente NISTrack, una plataforma SaaS para evaluar la madurez en ciberseguridad, y firmo cerca de la mitad de sus commits.',
          desc: 'Plataforma SaaS multitenant para evaluar la madurez, gestionar riesgos y dar seguimiento al cumplimiento en ciberseguridad, con referencia a NIST CSF 2.0 e ISO 27001.',
          context: 'Producto de Cloud Tecnologies, en nistrack.com. Es multitenant: varias organizaciones usan la misma plataforma, cada una con su propio espacio. Trabajo en él desde febrero de 2026.',
          problem: 'Las organizaciones necesitan conocer su nivel de madurez en ciberseguridad, gestionar sus riesgos y dar seguimiento al cumplimiento de marcos de referencia como NIST CSF 2.0 o ISO 27001.',
          role: [
            'Liderazgo técnico: defino qué se construye, reparto el trabajo y reviso e integro los cambios del equipo con GitFlow.',
            'Seguridad de la plataforma: aislamiento entre organizaciones (multitenancy), control de acceso por roles (RBAC), límite de peticiones, cookies HttpOnly, sanitización contra XSS, endurecimiento del login y 2FA.',
            'Módulo de riesgos, dashboard gerencial y valoración de activos (versiones 2.0 y 2.1).',
            'Migración del catálogo NIST CSF 2.0 a sus 106 subcategorías, en datos, backend y frontend.',
            'Rediseño visual de los reportes en PDF y de la landing, con un widget de radar NIST.',
            'Integración con n8n y Google Drive para generar los entregables de cada evaluación.',
            'Correcciones en producción: consultas SQL optimizadas, dashboards sin agotar la memoria y parches de vulnerabilidades (CVE) que bloqueaban el despliegue.',
          ],
          team: 'Somos tres: dos desarrolladores junior y yo. Según el historial de git, firmo 591 de los 1216 commits (cerca del 49 %) y abrí 61 Pull Requests, todos fusionados. El resto lo construyeron ellos, y las versiones que salen a producción reúnen trabajo de los tres.',
          evidence: [{ label: 'Publicación «NISTRACK | Plataforma de Gestión de Ciberseguridad NIST CSF 2.0» en mi perfil de LinkedIn', href: contact.linkedin }, { label: 'Historial de git del repositorio (privado): 591 commits entre febrero y noviembre de 2026' }],
        },
        erp: {
          org: 'Cloud Tecnologies · uso interno', badge: 'Dueño del repositorio · Desarrollo',
          title: 'Construí la mayor parte del ERP interno de Cloud Tecnologies y hoy dirijo su segunda versión, hecha con agentes de IA.',
          desc: 'Sistema interno de gestión de la empresa: proyectos, cotizaciones, finanzas y tareas. Es privado: la única captura es la pantalla de inicio de sesión, y no muestro datos reales.',
          context: 'Herramienta interna de Cloud Tecnologies en dos etapas: la primera versión, que empezamos tres personas en enero de 2026, y una segunda versión que empecé en octubre de 2026 para migrar el sistema.',
          problem: 'Reunir en un solo sistema la gestión interna de la empresa y, con la segunda versión, rehacerlo sobre una base con pruebas automatizadas, integración continua y documentación.',
          role: [
            'V1: base del sistema y despliegue automático funcionando desde el inicio.',
            'V1: módulo de Proyectos con tablero Kanban, y dashboard con radar de riesgos, indicadores y gráficos interactivos.',
            'V1: corrección de los indicadores de ingresos en dos monedas y formato de divisa en todas las vistas.',
            'V1: correcciones de seguridad tras una prueba con Kali Linux, y autenticación en dos pasos por TOTP (RFC 6238), que quité temporalmente durante la migración y volverá en la V2.',
            'V1: asistente con IA (Gemini) que responde sobre los datos reales del ERP.',
            'V1: despliegue a producción en cPanel con un único script SQL de instalación, y cierre de una fuga de logs y archivos de prueba que se publicaban.',
            'V2: migración a Laravel con React e Inertia, con pruebas automatizadas, integración continua en GitHub Actions y documentación de decisiones y despliegue.',
          ],
          team: 'V1: éramos tres. Según git, firmé 76 de los 120 commits y cerca del 73 % del código propio que sigue vivo. Los otros dos hicieron el módulo de cotizaciones y el motor financiero, las alertas por correo, el arrastrar y soltar del Kanban y los reportes en PDF. V2: soy el único desarrollador humano y trabajo con agentes de IA (Claude Code, entre otros); el historial no separa lo que escribieron ellos de lo que escribí yo. Yo defino el trabajo, reviso y fusiono los 58 Pull Requests.',
          evidence: [{ label: 'Historial de git de los dos repositorios (privados)' }],
        },
        termometro: {
          org: 'Cloud Tecnologies', badge: 'Líder técnico · Desarrollo',
          title: 'Lideré y desarrollé con mi equipo el Termómetro de Resiliencia Operativa, un diagnóstico gratuito ante el Fenómeno El Niño.',
          desc: 'Diagnóstico gratuito de preparación ante el Fenómeno El Niño y otras interrupciones: 20 preguntas, unos 5 minutos, informe en PDF y sin crear una cuenta.',
          context: 'Herramienta pública de Cloud Tecnologies, basada en la guía NIST SP 800-34 Rev.1 y adaptada a la costa norte del Perú. La desarrollamos entre julio y octubre de 2026, y la presenté en el CEO Summit 2026 de la Cámara de Comercio de Piura.',
          problem: 'Una organización que no conoce sus brechas de preparación descubre sus puntos débiles cuando ya ocurrió la contingencia. Una evaluación inicial ayuda a identificar esas brechas, orientar acciones de mejora y ver cómo la tecnología y la infraestructura sostienen la continuidad del negocio.',
          role: [
            'Liderazgo técnico: subí la base del proyecto y armé el flujo público del diagnóstico.',
            'Informe en PDF generado en el servidor con trabajos en cola, y correo al evaluado con la marca NISTRACK.',
            'Aviso por correo al equipo por cada lead nuevo.',
            'Panel de administración: roles, listado y ficha de leads (con papelera, reenvío y exportación), dashboard con indicadores y edición del catálogo con los campos de cálculo bloqueados.',
            'Despliegue continuo del backend por FTP con lftp.',
            'Seguridad: actualización de TanStack Start por una vulnerabilidad de XSS y un aviso de cookies que describe lo que el sitio hace de verdad.',
            'Presentación del Termómetro en el CEO Summit 2026.',
          ],
          team: 'Somos tres: dos desarrolladores junior y yo. Según el historial de git, firmé unos 52 commits; mis compañeros, 40 y 6. Es una evaluación preliminar: no reemplaza una auditoría integral ni certifica o garantiza la continuidad del negocio.',
          evidence: [{ label: 'Conversaciones de networking en el CEO Summit 2026 (Piura), donde presenté la herramienta' }],
        },
        'web-cloud': {
          org: 'Cloud Tecnologies', badge: 'Autor principal',
          title: 'Rediseñé y optimicé la web corporativa de Cloud Tecnologies, de la que soy el autor principal.',
          desc: 'Landing corporativa de la empresa, construida con Astro.',
          context: 'Sitio público de Cloud Tecnologies, en cloud-tecnologies.pe. Trabajé en él entre junio y septiembre de 2026.',
          problem: 'Que la web presente bien a la empresa: que cargue rápido, funcione bien en el móvil y lleve al visitante a pedir un diagnóstico.',
          role: [
            'Base del proyecto en Astro y rediseño de la landing, primero en un tema oscuro y luego en uno claro.',
            'Rendimiento: pasé la animación principal de Canvas 2D a WebGL, cambié React por Preact, quité framer-motion y recorté 712 KB de imágenes.',
            'Estabilidad: corregí errores críticos del formulario, fugas de memoria y el parpadeo de las tarjetas 3D.',
            'Auditoría por fases (animaciones, experiencia de uso, SEO básico y código muerto) y despliegue en Vercel.',
            'Textos y conversión: reescribí el copy y dejé el formulario a un clic de la llamada a la acción.',
            'Optimización para móvil.',
          ],
          team: 'Según el historial de git, firmo 34 de los 47 commits de la rama principal. Un compañero aportó GSAP, el globo 3D, la red de partners, efectos visuales, las páginas de servicios y las transiciones entre vistas; yo revisé e integré su trabajo.',
          evidence: [],
        },
        iestp: {
          org: 'Colaborador externo', badge: 'Apoyo en implementación',
          title: 'Participé en la instalación de almacenamiento empresarial y red de un instituto tecnológico.',
          desc: 'Instalación del storage Huawei OceanStor Dorado 3000 V6, conexión de puntos de acceso, configuración de switches por consola y documentación de la red.',
          context: 'Proyecto de infraestructura en un IESTP (instituto de educación superior tecnológico) en el que participé como colaborador externo dentro del equipo de implementación.',
          problem: 'Poner en marcha el almacenamiento empresarial y dejar la red conectada, identificada y documentada para su operación.',
          role: [
            'Instalación física de los discos del storage Huawei OceanStor Dorado 3000 V6 y apoyo general en su implementación.',
            'Cableado, conexión y ordenamiento; rotulado de gabinetes, conexiones y puertos de los puntos de acceso.',
            'Identificación y conexión de puntos de acceso (AP) y comprobación de encendido.',
            'Configuración de switches por cable de consola, siguiendo el procedimiento técnico del proyecto.',
            'Inventario de equipos y conexiones, y diagramas físicos y lógicos en Microsoft Visio.',
          ],
          team: 'Los gabinetes y los enlaces de fibra hacia el centro de datos ya estaban instalados cuando hice mis conexiones. El diseño y la implementación integral del centro de datos no estuvieron a mi cargo.',
          evidence: [],
        },
      },
    },
    story: {
      title: ['Me importa cómo se construye', 'y cómo llega a producción'],
      tap: 'tócame',
      intro: [{ t: 'Busco que el software del equipo sea… ' }, { b: 'ordenado' }, { t: ' en su flujo de trabajo, ' }, { b: 'seguro' }, { t: ' desde el desarrollo y ' }, { b: 'automatizado' }, { t: ' en sus despliegues.' }],
      nodes: {
        scalable: { label: 'Ordenado', text: [{ b: 'Ordenado:' }, { t: ' ramas con GitFlow y Pull Requests revisados antes de integrar.' }] },
        ai: { label: 'IA', text: [{ b: 'IA:' }, { t: ' uso IA generativa como apoyo en la revisión de cambios y en el desarrollo.' }] },
        secure: { label: 'Seguro', text: [{ b: 'Seguro:' }, { t: ' quiero llevar más prácticas de seguridad al ciclo de desarrollo; hacia ahí apunto con DevSecOps.' }] },
        maintainable: { label: 'CI/CD', text: [{ b: 'CI/CD:' }, { t: ' despliegues con GitHub Actions y SSH en lugar de pasos manuales.' }] },
      },
    },
    wall: {
      label: 'Del código al gabinete',
      burst: ['~ Código ~', 'y', 'cables'],
      text: [{ h: 'También trabajo en campo' }, { t: ': instalé discos de un storage empresarial, configuré switches por consola, conecté puntos de acceso y ' }, { h: 'documenté la red en diagramas físicos y lógicos.' }],
    },
    closing: { note: '¿hablamos?', title: '¿Conversamos sobre tu equipo o proyecto?', write: 'Escríbeme', location: 'Piura, Perú' },
    works: {
      title: 'Proyectos y casos',
      subtitle: 'Contexto, problema, mi participación y lo que hizo el equipo.',
      tabs: { all: 'Todos', software: 'Software', security: 'Ciberseguridad', infra: 'Infraestructura' },
      tabNotes: { all: 'Software SaaS, ciberseguridad e infraestructura en campo.', software: 'Productos y herramientas en los que lideré o desarrollé.', security: 'Soluciones orientadas a riesgo, cumplimiento y resiliencia.', infra: 'Trabajo práctico con almacenamiento, switching y documentación de redes.' },
    },
    about: {
      note: 'sobre mí',
      title: 'Un poco más sobre mí',
      intro: [{ t: 'Soy estudiante de Ingeniería de Sistemas e Informática, enfocado en ' }, { h: 'ciberseguridad y automatización' }, { t: ' de flujos de desarrollo. Hoy soy Tech Lead en Cloud Tecnologies, donde lidero el diseño técnico y el despliegue de NISTrack.' }],
      caption: 'Rodrigo Cruz',
      photoHint: 'Piura, Perú',
      items: [
        { icon: 'burst', title: 'Hoy en Cloud Tecnologies', text: 'Coordino al equipo de desarrollo con metodologías ágiles, gestiono el código con GitFlow, reviso los cambios e implemento flujos de CI/CD para que los despliegues sean más ordenados.' },
        { icon: 'spark', title: 'IA como apoyo', text: 'Uso IA generativa como apoyo en el desarrollo y en la revisión de Pull Requests. En los repositorios de la empresa hay código escrito a mano y también con agentes de IA.' },
        { icon: 'server', title: 'También en campo', text: 'He instalado almacenamiento empresarial, configurado switches por consola, conectado puntos de acceso y elaborado inventarios y diagramas de red.' },
        { icon: 'shield', title: 'Hacia DevSecOps y Cloud', text: 'Mi siguiente paso es incorporar más prácticas de seguridad al ciclo de desarrollo y crecer hacia DevSecOps y Cloud.' },
      ],
      skillsTitle: 'Habilidades',
      skillsNote: 'por áreas',
      groups: { dev: 'Desarrollo', devops: 'Repositorios y despliegue', security: 'Ciberseguridad', infra: 'Infraestructura', ai: 'IA', people: 'Liderazgo y negocio' },
      experienceTitle: 'Experiencia',
      current: 'actual',
      caseLink: 'Ver caso',
      jobs: [
        {
          role: 'Tech Lead', company: 'Cloud Tecnologies', place: 'Piura, Perú', period: 'Desde oct. 2024', mode: 'Tiempo parcial · Híbrido', current: true,
          note: 'Ingresé al equipo como programador; hoy ocupo el rol de Tech Lead.',
          groups: [
            { title: 'Liderazgo técnico', points: ['Coordino el trabajo del equipo de desarrollo y los entregables.', 'Defino requerimientos y oriento las decisiones técnicas.', 'Reviso código, ayudo a resolver bloqueos y apoyo a desarrolladores junior.', 'Dirijo a dos desarrolladores junior y desarrollo junto a ellos NISTrack, el Termómetro de Resiliencia y el ERP interno.'] },
            { title: 'Repositorios y revisión de cambios', points: ['Administro ramas en GitHub con GitFlow.', 'Reviso los Pull Requests antes de integrar funcionalidades.', 'Uso IA generativa como apoyo a la revisión y al desarrollo.'] },
            { title: 'Despliegues y operación', points: ['Configuro flujos de despliegue con GitHub Actions y automatizo tareas que antes eran manuales.', 'Realizo despliegues por SSH y controlo los entornos de ejecución.', 'Participo en el mantenimiento de la infraestructura interna y en la administración de la base de datos de producción.'] },
          ],
        },
        {
          role: 'Colaborador externo · Infraestructura', company: 'IESTP', place: 'Instituto de educación superior tecnológico', caseKey: 'iestp',
          groups: [
            { points: ['Instalación de los discos del storage Huawei OceanStor Dorado 3000 V6 y apoyo en su implementación.', 'Conexión de puntos de acceso y configuración de switches por consola.', 'Rotulado, inventario y diagramas físicos y lógicos en Microsoft Visio.'] },
          ],
        },
      ],
      educationTitle: 'Educación',
      education: { short: 'UTP', degree: 'Ingeniería de Sistemas e Informática', school: 'Universidad Tecnológica del Perú', period: '2022 — 2026', points: ['Estudiante'] },
      certsTitle: 'Certificaciones',
      certsNote: 'formación',
      certLabels: { issued: 'Emitido', expires: 'vence', expired: 'Vencida', id: 'ID', view: 'Ver certificado', history: 'Formación histórica', records: 'Constancias de participación' },
      certs: [
        { title: 'Ethical Hacking Professional Certification (CEHPC™)', org: 'CertiProf', issued: '22 mar. 2026', expires: '21 mar. 2029', id: 'JLRRFLDSRPL-WWQKKCTVQ-YQTSJJBWBR', href: 'https://drive.google.com/file/d/1QPMuw2qARPjMb4fRz8XAN1TEabsmmGH_/view?usp=sharing', highlight: true },
        { title: 'Sophos Certification', org: 'Sophos', issued: 'mar. 2024', expires: 'ene. 2026', id: 'ET15-Sophos-v5.0', expired: true },
        { title: 'Fortinet Network Security Expert Level 3: Certified Associate', org: 'Fortinet', issued: 'dic. 2023', expires: 'dic. 2024', id: '6426880590RC', expired: true },
        { title: 'Fortinet Network Security Expert Level 1: Certified Associate', org: 'Fortinet', issued: 'ene. 2023', expires: 'dic. 2025', id: '9943349093RC', expired: true },
      ],
      records: [
        { title: 'Hackathon Regional de Innovación Piura Innova 2026', org: 'GDG Piura', issued: 'oct. 2026' },
      ],
      eventsTitle: 'Eventos',
      eventsNote: 'donde he estado',
      events: [
        { key: 'piura-innova', title: 'Hackathon Regional de Innovación Piura Innova 2026', meta: '10 y 11 de octubre de 2026 · Piura', role: 'Participante · líder técnico del equipo Cloud Tecnologies', text: 'Organizada por GDG Piura y la Cámara de Comercio de Piura. En el Reto 6 (Corpotex) propusimos KeptAI, una plataforma para conciliar pagos recibidos por WhatsApp y calcular la rentabilidad por pedido. Lideré la parte técnica, construí el frontend con React y TypeScript y corregí errores del backend.' },
        { key: 'ceo-summit', title: 'CEO Summit 2026 · Empresas Resilientes', meta: 'Casa Andina, Piura · Cámara de Comercio de Piura', role: 'Asistente en representación de Cloud Tecnologies', text: 'Asistí a las exposiciones sobre resiliencia y continuidad empresarial, hice networking y conversé sobre el Termómetro de Resiliencia Operativa y su evaluación gratuita ante riesgos del Fenómeno El Niño.', caseKey: 'termometro' },
      ],
      cv: { note: 'todo en una hoja', title: 'Mi CV', text: 'Experiencia, educación, habilidades y certificaciones en PDF.', open: 'Ver CV', download: 'Descargar PDF' },
      dragHint: 'arrástrame',
    },
    footer: 'Hecho con React, Tailwind CSS y Motion.',
  },
  en: {
    meta: { title: 'Rodrigo Cruz | Tech Lead · Software, cybersecurity and infrastructure', description: 'Portfolio of Rodrigo Cruz, Tech Lead at Cloud Tecnologies and Systems and Computer Engineering student in Piura, Peru. SaaS software, CI/CD, cybersecurity and infrastructure.' },
    skip: 'Skip to content',
    langButton: 'Cambiar a español',
    tagline: 'tech lead · cybersecurity',
    nav: { main: 'Main navigation', social: 'Social and contact' },
    dock: { works: 'projects', about: 'about', links: 'links', allWorks: 'All case studies' },
    links: { linkedin: 'LinkedIn', email: 'Email', github: 'GitHub', cv: 'Resume' },
    hero: {
      hello: "Hi, I'm Rodrigo Cruz",
      headline: ['I lead teams that build and ship software that is…', 'secure'],
      side: ['Tech Lead at Cloud Tecnologies:', 'SaaS, CI/CD, cybersecurity and infrastructure.'],
      how: 'Okay… so what have I worked on?',
    },
    projects: {
      more: 'each case separates my contribution from the team’s work',
      newTab: 'opens in a new tab',
      cta: 'View case',
      sections: { context: 'Context', problem: 'Problem', role: 'My role', team: 'Team and scope', evidence: 'Evidence', gallery: 'Photos' },
      items: {
        nistrack: {
          org: 'Cloud Tecnologies', badge: 'Tech Lead · Development',
          title: 'I am the technical lead of NISTrack, a SaaS platform to assess cybersecurity maturity, and I authored about half of its commits.',
          desc: 'Multi-tenant SaaS platform to assess maturity, manage risk and track cybersecurity compliance, with reference to NIST CSF 2.0 and ISO 27001.',
          context: 'A Cloud Tecnologies product, at nistrack.com. It is multi-tenant: several organizations use the same platform, each in its own space. I have worked on it since February 2026.',
          problem: 'Organizations need to know their cybersecurity maturity level, manage their risks and track compliance with frameworks such as NIST CSF 2.0 or ISO 27001.',
          role: [
            'Technical leadership: I decide what gets built, split the work and review and merge the team’s changes with GitFlow.',
            'Platform security: tenant isolation (multitenancy), role-based access control (RBAC), rate limiting, HttpOnly cookies, XSS sanitization, login hardening and 2FA.',
            'Risk module, management dashboard and asset valuation (versions 2.0 and 2.1).',
            'Migrating the NIST CSF 2.0 catalog to its 106 subcategories, across data, backend and frontend.',
            'Visual redesign of the PDF reports and of the landing page, with a NIST radar widget.',
            'Integration with n8n and Google Drive to produce each assessment’s deliverables.',
            'Production fixes: optimized SQL queries, dashboards that no longer run out of memory, and patches for vulnerabilities (CVEs) that blocked deployment.',
          ],
          team: 'We are three: two junior developers and me. According to the git history, I authored 591 of the 1,216 commits (about 49%) and opened 61 Pull Requests, all merged. They built the rest, and the releases that go to production combine work from all three of us.',
          evidence: [{ label: 'Post “NISTRACK | NIST CSF 2.0 Cybersecurity Management Platform” on my LinkedIn profile', href: contact.linkedin }, { label: 'Git history of the (private) repository: 591 commits between February and November 2026' }],
        },
        erp: {
          org: 'Cloud Tecnologies · internal use', badge: 'Repository owner · Development',
          title: 'I built most of Cloud Tecnologies’ internal ERP, and I now lead its second version, built with AI agents.',
          desc: 'The company’s internal management system: projects, quotes, finance and tasks. It is private: the only screenshot is the login screen, and I show no real data.',
          context: 'An internal Cloud Tecnologies tool in two stages: the first version, which three of us started in January 2026, and a second version I started in October 2026 to migrate the system.',
          problem: 'Bring the company’s internal management into a single system and, with the second version, rebuild it on a foundation with automated tests, continuous integration and documentation.',
          role: [
            'V1: the system’s foundation, with automatic deployment working from the start.',
            'V1: Projects module with a Kanban board, and a dashboard with a risk radar, indicators and interactive charts.',
            'V1: fixing two-currency revenue indicators and currency formatting across every view.',
            'V1: security fixes after a test with Kali Linux, and TOTP two-factor authentication (RFC 6238), which I removed temporarily during the migration and will bring back in V2.',
            'V1: AI assistant (Gemini) that answers questions about the ERP’s real data.',
            'V1: production deployment on cPanel with a single SQL install script, and closing a leak of logs and test files that were being published.',
            'V2: migration to Laravel with React and Inertia, with automated tests, continuous integration on GitHub Actions and documented decisions and deployment.',
          ],
          team: 'V1: there were three of us. According to git, I authored 76 of the 120 commits and about 73% of the project’s own code that is still live. The other two built the quotes module and the financial engine, the email alerts, the Kanban drag and drop and the PDF reports. V2: I am the only human developer and I work with AI agents (Claude Code, among others); the history does not separate what they wrote from what I wrote. I define the work and review and merge the 58 Pull Requests.',
          evidence: [{ label: 'Git history of both (private) repositories' }],
        },
        termometro: {
          org: 'Cloud Tecnologies', badge: 'Technical lead · Development',
          title: 'With my team, I led and built the Operational Resilience Thermometer, a free El Niño readiness check.',
          desc: 'A free readiness check for El Niño and other disruptions: 20 questions, about 5 minutes, a PDF report and no account needed.',
          context: 'A public Cloud Tecnologies tool, based on the NIST SP 800-34 Rev.1 guide and adapted to Peru’s northern coast. We built it between July and October 2026, and I presented it at CEO Summit 2026, hosted by the Piura Chamber of Commerce.',
          problem: 'An organization that does not know its readiness gaps finds its weak spots once the contingency has already happened. An initial assessment helps identify those gaps, guide improvement actions and show how technology and infrastructure support business continuity.',
          role: [
            'Technical leadership: I set up the project’s foundation and built the public assessment flow.',
            'Server-side PDF report with queued jobs, and an email to the respondent with NISTRACK branding.',
            'Email alert to the team for every new lead.',
            'Admin panel: roles, lead list and detail (with trash, resend and export), a dashboard with indicators and catalog editing with the scoring fields locked.',
            'Continuous deployment of the backend over FTP with lftp.',
            'Security: updating TanStack Start for an XSS vulnerability and a cookie notice that describes what the site really does.',
            'Presenting the Thermometer at CEO Summit 2026.',
          ],
          team: 'We are three: two junior developers and me. According to the git history, I authored about 52 commits; my teammates, 40 and 6. It is a preliminary assessment: it does not replace a full audit, and it does not certify or guarantee business continuity.',
          evidence: [{ label: 'Networking conversations at CEO Summit 2026 (Piura), where I presented the tool' }],
        },
        'web-cloud': {
          org: 'Cloud Tecnologies', badge: 'Lead author',
          title: 'I redesigned and optimized the Cloud Tecnologies corporate website, and I am its lead author.',
          desc: 'The company’s corporate landing page, built with Astro.',
          context: 'Cloud Tecnologies’ public website, at cloud-tecnologies.pe. I worked on it between June and September 2026.',
          problem: 'Make the website present the company well: load fast, work well on mobile and lead visitors to request an assessment.',
          role: [
            'Project foundation in Astro and a redesign of the landing page, first in a dark theme and then in a light one.',
            'Performance: I moved the main animation from Canvas 2D to WebGL, swapped React for Preact, removed framer-motion and cut 712 KB of images.',
            'Stability: I fixed critical form bugs, memory leaks and the flickering of the 3D cards.',
            'Phased audit (animations, user experience, basic SEO and dead code) and deployment on Vercel.',
            'Copy and conversion: I rewrote the copy and put the form one click away from the call to action.',
            'Mobile optimization.',
          ],
          team: 'According to the git history, I authored 34 of the 47 commits on the main branch. A teammate contributed GSAP, the 3D globe, the partners network, visual effects, the service pages and the view transitions; I reviewed and integrated their work.',
          evidence: [],
        },
        iestp: {
          org: 'External collaborator', badge: 'Implementation support',
          title: 'I took part in installing enterprise storage and networking for a technical institute.',
          desc: 'Installing the Huawei OceanStor Dorado 3000 V6 storage, connecting access points, configuring switches over console and documenting the network.',
          context: 'Infrastructure project at an IESTP (a technical higher-education institute) where I worked as an external collaborator on the implementation team.',
          problem: 'Bring the enterprise storage online and leave the network connected, labeled and documented for operation.',
          role: [
            'Physically installing the disks of the Huawei OceanStor Dorado 3000 V6 storage and general support during its implementation.',
            'Cabling, connecting and organizing; labeling cabinets, connections and access point ports.',
            'Identifying and connecting access points (APs) and checking they powered on.',
            'Configuring switches over a console cable, following the project’s technical procedure.',
            'Inventory of equipment and connections, and physical and logical diagrams in Microsoft Visio.',
          ],
          team: 'The cabinets and the fiber links to the data center were already installed when I made my connections. The design and full implementation of the data center were not my responsibility.',
          evidence: [],
        },
      },
    },
    story: {
      title: ['I care about how software is built', 'and how it reaches production'],
      tap: 'tap on me',
      intro: [{ t: 'I want the team’s software to be… ' }, { b: 'organized' }, { t: ' in its workflow, ' }, { b: 'secure' }, { t: ' from development and ' }, { b: 'automated' }, { t: ' in its deployments.' }],
      nodes: {
        scalable: { label: 'Organized', text: [{ b: 'Organized:' }, { t: ' GitFlow branches and Pull Requests reviewed before merging.' }] },
        ai: { label: 'AI', text: [{ b: 'AI:' }, { t: ' I use generative AI to support code review and development.' }] },
        secure: { label: 'Secure', text: [{ b: 'Secure:' }, { t: ' I want to bring more security practices into the development cycle; that is where I am heading with DevSecOps.' }] },
        maintainable: { label: 'CI/CD', text: [{ b: 'CI/CD:' }, { t: ' deployments with GitHub Actions and SSH instead of manual steps.' }] },
      },
    },
    wall: {
      label: 'From code to the cabinet',
      burst: ['~ Code ~', 'and', 'cables'],
      text: [{ h: 'I also work on site' }, { t: ': I installed disks in an enterprise storage system, configured switches over console, connected access points and ' }, { h: 'documented the network in physical and logical diagrams.' }],
    },
    closing: { note: "let's talk?", title: 'Shall we talk about your team or project?', write: 'Email me', location: 'Piura, Peru' },
    works: {
      title: 'Projects and case studies',
      subtitle: 'Context, problem, my role and what the team did.',
      tabs: { all: 'All', software: 'Software', security: 'Cybersecurity', infra: 'Infrastructure' },
      tabNotes: { all: 'SaaS software, cybersecurity and on-site infrastructure.', software: 'Products and tools I led or built.', security: 'Solutions focused on risk, compliance and resilience.', infra: 'Hands-on work with storage, switching and network documentation.' },
    },
    about: {
      note: 'about me',
      title: 'A little more about me',
      intro: [{ t: 'I am a Systems and Computer Engineering student focused on ' }, { h: 'cybersecurity and automating' }, { t: ' development workflows. Today I am Tech Lead at Cloud Tecnologies, where I lead the technical design and deployment of NISTrack.' }],
      caption: 'Rodrigo Cruz',
      photoHint: 'Piura, Peru',
      items: [
        { icon: 'burst', title: 'Today at Cloud Tecnologies', text: 'I coordinate the development team using agile methods, manage code with GitFlow, review changes and set up CI/CD pipelines so deployments are more orderly.' },
        { icon: 'spark', title: 'AI as support', text: 'I use generative AI to support development and Pull Request reviews. The company’s repositories contain code written by hand and also with AI agents.' },
        { icon: 'server', title: 'Also on site', text: 'I have installed enterprise storage, configured switches over console, connected access points and produced network inventories and diagrams.' },
        { icon: 'shield', title: 'Heading to DevSecOps and Cloud', text: 'My next step is to bring more security practices into the development cycle and grow toward DevSecOps and Cloud.' },
      ],
      skillsTitle: 'Skills',
      skillsNote: 'by area',
      groups: { dev: 'Development', devops: 'Repositories & deployment', security: 'Cybersecurity', infra: 'Infrastructure', ai: 'AI', people: 'Leadership & business' },
      experienceTitle: 'Experience',
      current: 'current',
      caseLink: 'View case',
      jobs: [
        {
          role: 'Tech Lead', company: 'Cloud Tecnologies', place: 'Piura, Peru', period: 'Since Oct 2024', mode: 'Part-time · Hybrid', current: true,
          note: 'I joined the team as a developer; today I hold the Tech Lead role.',
          groups: [
            { title: 'Technical leadership', points: ['I coordinate the development team’s work and deliverables.', 'I define requirements and guide technical decisions.', 'I review code, help unblock issues and support junior developers.', 'I lead two junior developers and build NISTrack, the Resilience Thermometer and the internal ERP alongside them.'] },
            { title: 'Repositories and code review', points: ['I manage GitHub branches with GitFlow.', 'I review Pull Requests before features are merged.', 'I use generative AI to support reviews and development.'] },
            { title: 'Deployments and operations', points: ['I set up deployment pipelines with GitHub Actions and automate tasks that used to be manual.', 'I deploy over SSH and keep runtime environments under control.', 'I take part in maintaining internal infrastructure and administering the production database.'] },
          ],
        },
        {
          role: 'External collaborator · Infrastructure', company: 'IESTP', place: 'Technical higher-education institute', caseKey: 'iestp',
          groups: [
            { points: ['Installed the disks of the Huawei OceanStor Dorado 3000 V6 storage and supported its implementation.', 'Connected access points and configured switches over console.', 'Labeling, inventory, and physical and logical diagrams in Microsoft Visio.'] },
          ],
        },
      ],
      educationTitle: 'Education',
      education: { short: 'UTP', degree: 'Systems and Computer Engineering', school: 'Universidad Tecnológica del Perú', period: '2022 — 2026', points: ['Student'] },
      certsTitle: 'Certifications',
      certsNote: 'training',
      certLabels: { issued: 'Issued', expires: 'expires', expired: 'Expired', id: 'ID', view: 'View certificate', history: 'Past training', records: 'Certificates of participation' },
      certs: [
        { title: 'Ethical Hacking Professional Certification (CEHPC™)', org: 'CertiProf', issued: 'Mar 22, 2026', expires: 'Mar 21, 2029', id: 'JLRRFLDSRPL-WWQKKCTVQ-YQTSJJBWBR', href: 'https://drive.google.com/file/d/1QPMuw2qARPjMb4fRz8XAN1TEabsmmGH_/view?usp=sharing', highlight: true },
        { title: 'Sophos Certification', org: 'Sophos', issued: 'Mar 2024', expires: 'Jan 2026', id: 'ET15-Sophos-v5.0', expired: true },
        { title: 'Fortinet Network Security Expert Level 3: Certified Associate', org: 'Fortinet', issued: 'Dec 2023', expires: 'Dec 2024', id: '6426880590RC', expired: true },
        { title: 'Fortinet Network Security Expert Level 1: Certified Associate', org: 'Fortinet', issued: 'Jan 2023', expires: 'Dec 2025', id: '9943349093RC', expired: true },
      ],
      records: [
        { title: 'Piura Innova 2026 Regional Innovation Hackathon', org: 'GDG Piura', issued: 'Oct 2026' },
      ],
      eventsTitle: 'Events',
      eventsNote: 'where I have been',
      events: [
        { key: 'piura-innova', title: 'Piura Innova 2026 Regional Innovation Hackathon', meta: 'October 10–11, 2026 · Piura', role: 'Participant · technical lead of the Cloud Tecnologies team', text: 'Organized by GDG Piura and the Piura Chamber of Commerce. For Challenge 6 (Corpotex) we proposed KeptAI, a platform to reconcile payments received through WhatsApp and calculate profit per order. I led the technical side, built the frontend with React and TypeScript and fixed backend bugs.' },
        { key: 'ceo-summit', title: 'CEO Summit 2026 · Resilient Companies', meta: 'Casa Andina, Piura · Piura Chamber of Commerce', role: 'Attendee representing Cloud Tecnologies', text: 'I attended the talks on business resilience and continuity, networked, and talked about the Operational Resilience Thermometer and its free assessment of El Niño-related risks.', caseKey: 'termometro' },
      ],
      cv: { note: 'all on one page', title: 'My resume', text: 'Experience, education, skills and certifications as a PDF.', open: 'View resume', download: 'Download PDF' },
      dragHint: 'drag me',
    },
    footer: 'Built with React, Tailwind CSS and Motion.',
  },
}
