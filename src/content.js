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
  { key: 'dev', items: ['TypeScript', 'React.js', 'Spring Boot', 'PostgreSQL', 'Desarrollo full stack|Full-stack development', 'Desarrollo de software|Software development', 'Debugging', 'Ingeniería|Engineering'] },
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
  { key: 'nistrack', name: 'NISTrack', image: 'nistrack', art: 'deploy', tags: ['SaaS multitenant|Multi-tenant SaaS', 'NIST CSF 2.0', 'ISO 27001', 'GitHub Actions', 'GitFlow'], tabs: ['software', 'security'], tint: '#dbe7e3' },
  { key: 'termometro', name: 'Termómetro de Resiliencia|Resilience Thermometer', image: 'termometro', art: 'termometro', tags: ['Continuidad operativa|Business continuity', 'Gestión de riesgos|Risk management'], tabs: ['software', 'security'], tint: '#e4e2d8' },
  { key: 'keptai', name: 'KeptAI', image: 'keptai', art: 'keptai', year: '2026', tags: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL'], tabs: ['software'], tint: '#dde4ee' },
  { key: 'iestp', name: 'Infraestructura IESTP|IESTP infrastructure', image: 'iestp', art: 'network', tags: ['Huawei OceanStor Dorado 3000 V6', 'Switching', 'Microsoft Visio'], tabs: ['infra'], tint: '#e6e1e8' },
]

// Muro del inicio: 4 columnas de piezas.
// { img: 'nombre' } → foto de src/assets/wall/nombre.(webp|png|jpg); si no existe, no se muestra.
// { tall: true } → foto vertical. { code: 'deploy'|'gitflow'|'network' } → ilustración. { text: true } → texto del muro. { burst: true } → estrella.
export const wall = [
  [{ img: 'infra-1' }, { code: 'gitflow' }],
  [{ text: true }, { img: 'infra-2', tall: true }],
  [{ burst: true }, { img: 'infra-3' }],
  [{ img: 'infra-4', tall: true }, { code: 'deploy' }],
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
          org: 'Cloud Tecnologies', badge: 'Tech Lead',
          title: 'Lidero técnicamente NISTrack, una plataforma SaaS para evaluar la madurez en ciberseguridad.',
          desc: 'Plataforma SaaS multitenant para evaluar la madurez, gestionar riesgos y dar seguimiento al cumplimiento en ciberseguridad, con referencia a NIST CSF 2.0 e ISO 27001.',
          context: 'Producto empresarial desarrollado por el equipo de Cloud Tecnologies. Es multitenant: varias organizaciones usan la misma plataforma, cada una con su propio espacio.',
          problem: 'Las organizaciones necesitan conocer su nivel de madurez en ciberseguridad, gestionar sus riesgos y dar seguimiento al cumplimiento de marcos de referencia como NIST CSF 2.0 o ISO 27001.',
          role: [
            'Liderazgo técnico y coordinación del equipo de desarrollo.',
            'Orientación de la arquitectura y de las decisiones técnicas.',
            'Revisión de código y de Pull Requests antes de integrar funcionalidades.',
            'Gestión de ramas y repositorios en GitHub con GitFlow.',
            'Automatización de despliegues con GitHub Actions y seguimiento de la operación técnica.',
          ],
          team: 'NISTrack es un trabajo de equipo: sus módulos los desarrollan distintos integrantes. Mi responsabilidad es la dirección técnica, la revisión e integración de los cambios y los despliegues.',
          evidence: [{ label: 'Publicación «NISTRACK | Plataforma de Gestión de Ciberseguridad NIST CSF 2.0» en mi perfil de LinkedIn', href: contact.linkedin }],
        },
        termometro: {
          org: 'Desarrollo propio · presentado con Cloud Tecnologies', badge: 'Desarrollo',
          title: 'Desarrollé el Termómetro de Resiliencia Operativa, una evaluación preliminar de preparación ante riesgos.',
          desc: 'Herramienta de evaluación inicial y gratuita sobre la preparación de las organizaciones ante riesgos y contingencias, incluidos los asociados al Fenómeno El Niño.',
          context: 'En el norte del Perú, eventos como el Fenómeno El Niño ponen a prueba la continuidad de las operaciones. Presenté la herramienta en espacios de networking vinculados a Cloud Tecnologies.',
          problem: 'Una organización que no conoce sus brechas de preparación descubre sus puntos débiles cuando ya ocurrió la contingencia. Una evaluación inicial ayuda a identificar esas brechas, orientar acciones de mejora y ver cómo la tecnología y la infraestructura sostienen la continuidad del negocio.',
          role: [
            'Desarrollo del sistema de evaluación.',
            'Presentación de la herramienta y de su evaluación gratuita en espacios de networking.',
          ],
          team: 'Es una evaluación preliminar para orientar decisiones: no reemplaza una auditoría integral, no certifica ni garantiza la continuidad del negocio.',
          evidence: [{ label: 'Presentada en conversaciones de networking del CEO Summit 2026 (Piura)' }],
        },
        keptai: {
          org: 'Hackathon Piura Innova 2026', badge: 'Líder técnico · Frontend',
          title: 'Lideré técnicamente a mi equipo en la Hackathon Piura Innova 2026 con KeptAI.',
          desc: 'Plataforma que concilia pagos recibidos por WhatsApp y calcula la rentabilidad por pedido.',
          context: 'Hackathon Regional de Innovación Piura Innova 2026, organizada por GDG Piura y la Cámara de Comercio de Piura el 10 y 11 de octubre de 2026. Participé con el equipo de Cloud Tecnologies.',
          problem: 'Responder al Reto 6, propuesto por Corpotex. Nuestra propuesta: conciliar los pagos que llegan por WhatsApp y calcular la rentabilidad de cada pedido.',
          role: [
            'Liderazgo técnico del equipo durante la hackathon.',
            'Desarrollo del frontend con React y TypeScript.',
            'Corrección de errores en el backend.',
          ],
          team: 'KeptAI fue un trabajo de equipo. Mi aporte se concentró en el liderazgo técnico, el frontend y la depuración del backend.',
          evidence: [{ label: 'Constancia de participación (GDG Piura y Cámara de Comercio de Piura)' }],
        },
        iestp: {
          org: 'Colaborador externo', badge: 'Apoyo en implementación',
          title: 'Participé en la instalación de almacenamiento empresarial y red de un instituto tecnológico.',
          desc: 'Instalación del storage Huawei OceanStor Dorado 3000 V6, conexión de puntos de acceso, configuración de switches por consola y documentación de la red.',
          context: 'Proyecto de infraestructura en un IESTP (instituto de educación superior tecnológico) en el que participé como colaborador externo, de forma independiente a mi rol en Cloud Tecnologies.',
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
        { icon: 'spark', title: 'IA como apoyo', text: 'Uso herramientas de IA generativa como apoyo en la revisión de Pull Requests y en el desarrollo del día a día.' },
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
            { title: 'Liderazgo técnico', points: ['Coordino el trabajo del equipo de desarrollo y los entregables.', 'Defino requerimientos y oriento las decisiones técnicas.', 'Reviso código, ayudo a resolver bloqueos y apoyo a desarrolladores junior.', 'Superviso el desarrollo de NISTrack.'] },
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
        { title: 'Ethical Hacking Professional Certificate', org: 'CertiProf', issued: 'mar. 2026', expires: 'mar. 2029', id: 'JLRRFLDSRPL-WWQKKCTVQ-YQTSJJBWBR', href: 'https://drive.google.com/file/d/1QPMuw2qARPjMb4fRz8XAN1TEabsmmGH_/view?usp=sharing', highlight: true },
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
        { key: 'piura-innova', title: 'Hackathon Regional de Innovación Piura Innova 2026', meta: '10 y 11 de octubre de 2026 · Piura', role: 'Participante · líder técnico del equipo Cloud Tecnologies', text: 'Organizada por GDG Piura y la Cámara de Comercio de Piura. En el Reto 6 (Corpotex) desarrollamos KeptAI; lideré la parte técnica, construí el frontend y corregí errores del backend.', caseKey: 'keptai' },
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
          org: 'Cloud Tecnologies', badge: 'Tech Lead',
          title: 'I am the technical lead of NISTrack, a SaaS platform to assess cybersecurity maturity.',
          desc: 'Multi-tenant SaaS platform to assess maturity, manage risk and track cybersecurity compliance, with reference to NIST CSF 2.0 and ISO 27001.',
          context: 'Enterprise product built by the Cloud Tecnologies team. It is multi-tenant: several organizations use the same platform, each in its own space.',
          problem: 'Organizations need to know their cybersecurity maturity level, manage their risks and track compliance with frameworks such as NIST CSF 2.0 or ISO 27001.',
          role: [
            'Technical leadership and coordination of the development team.',
            'Guiding the architecture and technical decisions.',
            'Reviewing code and Pull Requests before features are merged.',
            'Managing branches and repositories on GitHub with GitFlow.',
            'Automating deployments with GitHub Actions and following up on technical operations.',
          ],
          team: 'NISTrack is a team effort: its modules are built by different team members. My responsibility is technical direction, reviewing and integrating changes, and deployments.',
          evidence: [{ label: 'Post “NISTRACK | NIST CSF 2.0 Cybersecurity Management Platform” on my LinkedIn profile', href: contact.linkedin }],
        },
        termometro: {
          org: 'Own development · presented with Cloud Tecnologies', badge: 'Development',
          title: 'I built the Operational Resilience Thermometer, a preliminary assessment of readiness for risks.',
          desc: 'A free, initial assessment tool on how prepared organizations are for risks and contingencies, including those related to the El Niño phenomenon.',
          context: 'In northern Peru, events such as El Niño put business continuity to the test. I presented the tool at networking events connected to Cloud Tecnologies.',
          problem: 'An organization that does not know its readiness gaps finds its weak spots once the contingency has already happened. An initial assessment helps identify those gaps, guide improvement actions and show how technology and infrastructure support business continuity.',
          role: [
            'Development of the assessment system.',
            'Presenting the tool and its free assessment at networking events.',
          ],
          team: 'It is a preliminary assessment meant to guide decisions: it does not replace a full audit, and it does not certify or guarantee business continuity.',
          evidence: [{ label: 'Presented in networking conversations at CEO Summit 2026 (Piura)' }],
        },
        keptai: {
          org: 'Piura Innova 2026 Hackathon', badge: 'Technical lead · Frontend',
          title: 'I was the technical lead of my team at the Piura Innova 2026 Hackathon with KeptAI.',
          desc: 'A platform that reconciles payments received through WhatsApp and calculates profit per order.',
          context: 'Piura Innova 2026 Regional Innovation Hackathon, organized by GDG Piura and the Piura Chamber of Commerce on October 10 and 11, 2026. I took part with the Cloud Tecnologies team.',
          problem: 'Answer Challenge 6, posed by Corpotex. Our proposal: reconcile payments that arrive through WhatsApp and calculate the profit of each order.',
          role: [
            'Technical leadership of the team during the hackathon.',
            'Frontend development with React and TypeScript.',
            'Fixing bugs in the backend.',
          ],
          team: 'KeptAI was a team effort. My contribution focused on technical leadership, the frontend and debugging the backend.',
          evidence: [{ label: 'Certificate of participation (GDG Piura and Piura Chamber of Commerce)' }],
        },
        iestp: {
          org: 'External collaborator', badge: 'Implementation support',
          title: 'I took part in installing enterprise storage and networking for a technical institute.',
          desc: 'Installing the Huawei OceanStor Dorado 3000 V6 storage, connecting access points, configuring switches over console and documenting the network.',
          context: 'Infrastructure project at an IESTP (a public technical higher-education institute) where I worked as an external collaborator, independently from my role at Cloud Tecnologies.',
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
        { icon: 'spark', title: 'AI as support', text: 'I use generative AI tools to support Pull Request reviews and day-to-day development.' },
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
            { title: 'Technical leadership', points: ['I coordinate the development team’s work and deliverables.', 'I define requirements and guide technical decisions.', 'I review code, help unblock issues and support junior developers.', 'I oversee the development of NISTrack.'] },
            { title: 'Repositories and code review', points: ['I manage GitHub branches with GitFlow.', 'I review Pull Requests before features are merged.', 'I use generative AI to support reviews and development.'] },
            { title: 'Deployments and operations', points: ['I set up deployment pipelines with GitHub Actions and automate tasks that used to be manual.', 'I deploy over SSH and keep runtime environments under control.', 'I take part in maintaining internal infrastructure and administering the production database.'] },
          ],
        },
        {
          role: 'External collaborator · Infrastructure', company: 'IESTP', place: 'Public technical higher-education institute', caseKey: 'iestp',
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
        { title: 'Ethical Hacking Professional Certificate', org: 'CertiProf', issued: 'Mar 2026', expires: 'Mar 2029', id: 'JLRRFLDSRPL-WWQKKCTVQ-YQTSJJBWBR', href: 'https://drive.google.com/file/d/1QPMuw2qARPjMb4fRz8XAN1TEabsmmGH_/view?usp=sharing', highlight: true },
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
        { key: 'piura-innova', title: 'Piura Innova 2026 Regional Innovation Hackathon', meta: 'October 10–11, 2026 · Piura', role: 'Participant · technical lead of the Cloud Tecnologies team', text: 'Organized by GDG Piura and the Piura Chamber of Commerce. For Challenge 6 (Corpotex) we built KeptAI; I led the technical side, built the frontend and fixed backend bugs.', caseKey: 'keptai' },
        { key: 'ceo-summit', title: 'CEO Summit 2026 · Resilient Companies', meta: 'Casa Andina, Piura · Piura Chamber of Commerce', role: 'Attendee representing Cloud Tecnologies', text: 'I attended the talks on business resilience and continuity, networked, and talked about the Operational Resilience Thermometer and its free assessment of El Niño-related risks.', caseKey: 'termometro' },
      ],
      cv: { note: 'all on one page', title: 'My resume', text: 'Experience, education, skills and certifications as a PDF.', open: 'View resume', download: 'Download PDF' },
      dragHint: 'drag me',
    },
    footer: 'Built with React, Tailwind CSS and Motion.',
  },
}
