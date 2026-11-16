import { createRef, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowDown, ArrowRight, ArrowUpRight, FileText, Mail, MapPin } from 'lucide-react'
import { contact, projects, wall } from '../content.js'
import { projectImages, routes, useCv, useLang, wallImages, wallVideos } from '../lib.js'
import { Link, Rich } from '../components/Core.jsx'
import { CodeArt, TerminalCursor } from '../components/Decor.jsx'

// Colores de la curva (los mismos que --color-rust y --color-leaf en index.css).
const ACCENT = '#2f4fd8', LEAF = '#0f766e'

// Pantallas chicas (celulares): se simplifican las animaciones que se repintan en cada fotograma de scroll.
const compactQuery = '(max-width: 767px)'
function useCompact() {
  return useSyncExternalStore(
    notify => { const media = window.matchMedia(compactQuery); media.addEventListener('change', notify); return () => media.removeEventListener('change', notify) },
    () => window.matchMedia(compactQuery).matches,
    () => false,
  )
}

// Vuelo del mazo, en alturas de ventana de scroll:
// 0 → RISE_END: el mazo sube y se abre en abanico.
// FLY_START → FLY_END: cada tarjeta viaja hasta la imagen de su proyecto (con un pequeño desfase entre tarjetas).
const RISE_END = 0.45, FLY_START = 0.5, FLY_END = 1.2, STAGGER = 0.06
const clamp01 = v => Math.min(1, Math.max(0, v))
const ease = v => v < 0.5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2
const lerp = (a, b, t) => a + (b - a) * t

function flight(scrollY, index) {
  const vh = window.innerHeight
  const start = (FLY_START + index * STAGGER) * vh
  return { rise: clamp01(scrollY / (RISE_END * vh)), fly: clamp01((scrollY - start) / ((FLY_END - FLY_START) * vh)) }
}

function Frame({ project, className = '', style }) {
  const image = projectImages[project.image]
  return (
    <motion.div style={{ backgroundColor: project.tint, ...style }} className={`rounded-2xl p-2.5 ${className}`}>
      {image ? <img src={image} alt="" className="aspect-[16/10] w-full rounded-lg object-cover object-top" /> : <CodeArt art={project.art} className="aspect-[16/10] rounded-lg" />}
    </motion.div>
  )
}

// Tarjeta del mazo: fija en pantalla, interpola entre su sitio en el abanico y la imagen real de su proyecto.
// Solo anima transform y opacity (los resuelve la GPU): el tamaño base es el del destino y se reduce con `scale`.
// La posición del destino se mide cuando cambia el layout, no en cada fotograma de scroll.
function FlyingCard({ project, index, total, target }) {
  const x = useMotionValue(0), y = useMotionValue(0), width = useMotionValue(0), scale = useMotionValue(1), rotate = useMotionValue(0), opacity = useMotionValue(0)
  const { scrollY } = useScroll()

  useEffect(() => {
    let box = null
    const measure = () => {
      const el = target.current
      if (!el) return
      const r = el.getBoundingClientRect()
      box = { left: r.left, top: r.top + window.scrollY, width: r.width, height: r.height }
      width.set(r.width)
    }
    const update = () => {
      if (!box) return
      const vw = window.innerWidth, vh = window.innerHeight, scroll = window.scrollY
      const { rise, fly } = flight(scroll, index)
      const offset = index - (total - 1) / 2
      const w0 = Math.min(vw * 0.78, 470)
      const h0 = w0 * 10 / 16 + 20
      const a = ease(rise)
      const f = ease(fly)
      const fromX = vw / 2 + offset * (vw < 768 ? 22 : 115) * a
      const fromY = lerp(vh * 1.1, vh * 0.58 - h0 / 2, a) + Math.abs(offset) * 14 * a + h0 / 2
      x.set(lerp(fromX, box.left + box.width / 2, f) - box.width / 2)
      y.set(lerp(fromY, box.top - scroll + box.height / 2, f) - box.height / 2)
      scale.set(lerp(w0 / box.width, 1, f))
      rotate.set(lerp(offset * 5 * a, 0, f))
      opacity.set(fly >= 1 ? 0 : clamp01(rise * 5))
    }
    const refresh = () => { measure(); update() }
    refresh()
    const unsubscribe = scrollY.on('change', update)
    const observer = new ResizeObserver(refresh)
    observer.observe(document.body)
    window.addEventListener('resize', refresh)
    return () => { unsubscribe(); observer.disconnect(); window.removeEventListener('resize', refresh) }
  }, [scrollY, target, index, total, x, y, width, scale, rotate, opacity])

  return <Frame project={project} style={{ x, y, width, scale, rotate, opacity, zIndex: 30 + total - index }} className="pointer-events-none fixed left-0 top-0 will-change-transform shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]" />
}

// Palabra destacada del titular: se borra y se escribe la siguiente, como en una terminal.
// Con movimiento reducido se queda la primera palabra.
function useTypewriter(words, enabled) {
  const [text, setText] = useState(words[0])
  useEffect(() => {
    if (!enabled || words.length < 2) return
    let index = 0, chars = words[0].length, deleting = true, timer
    const tick = () => {
      if (deleting && chars === 0) { deleting = false; index = (index + 1) % words.length }
      else if (!deleting && chars === words[index].length) { deleting = true; timer = setTimeout(tick, 2400); return }
      else chars += deleting ? -1 : 1
      setText(words[index].slice(0, chars))
      timer = setTimeout(tick, deleting ? 45 : 90)
    }
    timer = setTimeout(tick, 2800)
    return () => clearTimeout(timer)
  }, [words, enabled])
  return text
}

function Headline({ words }) {
  const reduce = useReducedMotion()
  const [list] = useState(() => Array.isArray(words) ? words : [words])
  const text = useTypewriter(list, !reduce)
  return (
    <span className="mt-1 flex items-center gap-2">
      <span className="sr-only">{list.join(', ')}</span>
      <motion.span aria-hidden="true" initial={{ scale: 0.6, rotate: -8, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.55 }} className="inline-block min-h-[1.12em] min-w-[0.6em] whitespace-nowrap rounded-full bg-rust px-[0.28em] pb-[0.1em] pt-[0.02em] text-white">{text}</motion.span>
      <TerminalCursor />
    </span>
  )
}

// Portada fija: el texto se apaga mientras el mazo sube.
function Intro() {
  const { t, lang } = useLang()
  const cv = useCv()
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(p, [0, 0.45], [1, 0.12])
  const heroY = useTransform(p, [0, 0.6], [0, -160])
  const fade = delay => ({ initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } })

  return (
    <div ref={ref} className={reduce ? '' : 'h-[185vh]'}>
      <section aria-labelledby="hero-title" className={`${reduce ? 'min-h-screen' : 'sticky top-0 h-screen'} flex items-center justify-center overflow-hidden px-5`}>
        <motion.div style={reduce ? undefined : { opacity: heroOpacity, y: heroY }} className="w-full max-w-[50rem] pb-24">
          <motion.p {...fade(0)} className="mb-4 flex items-center gap-2 font-mono text-sm text-zinc-500"><span aria-hidden="true" className="text-rust">›</span>{t.hero.hello}</motion.p>
          <motion.h1 id="hero-title" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }} className="display text-[2.5rem] leading-[1.04] sm:text-[3.4rem] lg:text-[4.1rem]">
            {t.hero.headline[0]}
            <Headline key={lang} words={t.hero.headline[1]} />
          </motion.h1>
          <motion.p {...fade(0.8)} className="mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">{t.hero.side}</motion.p>
          <motion.div {...fade(1)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#proyectos" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-white transition-colors hover:bg-rust">{t.hero.cta.works}<ArrowDown size={15} aria-hidden="true" /></a>
            <a href={`mailto:${contact.email}`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-zinc-900/15 bg-white px-5 text-sm font-medium transition-colors hover:border-zinc-900/40"><Mail size={15} aria-hidden="true" />{t.hero.cta.contact}</a>
            {cv && <a href={cv} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 px-2 text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-rust"><FileText size={15} aria-hidden="true" />{t.hero.cta.cv}</a>}
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

// Cifra de un proyecto: si empieza con un número (ej. "591 commits", "~5 min"), cuenta desde 0 al aparecer.
const statPattern = /^([~−+]?)(\d+)(.*)$/
function Stat({ value }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { once: true, amount: 0.8 })
  const match = value.match(statPattern)
  const target = match ? Number(match[2]) : 0
  const count = useMotionValue(reduce ? target : 0)
  const shown = useTransform(count, v => Math.round(v))
  useEffect(() => {
    if (reduce) { count.set(target); return }
    if (!inView) return
    const controls = animate(count, target, { duration: 1.2, ease: [0.2, 0.7, 0.2, 1] })
    return () => controls.stop()
  }, [inView, reduce, count, target])
  if (!match) return value
  return <>{match[1]}<motion.span ref={ref} className="tabular-nums">{shown}</motion.span>{match[3]}</>
}

function ProjectRow({ project, index, frameRef }) {
  const { t, pick } = useLang()
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const landed = useTransform(scrollY, v => reduce || flight(v, index).fly >= 1 ? 1 : 0)
  const item = t.projects.items[project.key]
  const name = pick(project.name)
  const flip = index % 2 === 1
  return (
    <Link to={`${routes.works}#${project.key}`} aria-label={`${t.projects.cta}: ${name} — ${item.title}`} className="group grid items-center gap-6 sm:gap-10 md:grid-cols-2">
      <div className={`relative ${flip ? '' : 'md:order-2'}`}>
        <div ref={frameRef}>
          <Frame project={project} style={{ opacity: landed }} className="shadow-[0_24px_50px_-24px_rgba(0,0,0,0.35)] ring-2 ring-transparent transition-[translate,box-shadow] duration-300 group-hover:-translate-y-1 group-hover:ring-rust" />
        </div>
      </div>
      <motion.div initial={reduce ? false : { opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }} className={`relative ${flip ? 'md:pl-4' : 'md:pr-6'}`}>
        <p className="meta mb-2 flex flex-wrap items-center gap-x-2"><span className="font-medium text-ink">{name}</span><span aria-hidden="true" className="text-zinc-300">/</span>{item.org}</p>
        <h2 className="display text-2xl leading-[1.12] tracking-[-0.035em] transition-colors duration-300 group-hover:text-rust sm:text-[1.7rem]">{item.title}</h2>
        {item.stats?.length > 0 && <ul className="mt-4 flex flex-wrap gap-2">{item.stats.map(stat => <li key={stat} className="rounded-lg border border-zinc-900/10 bg-white px-2.5 py-1 font-mono text-[13px] text-ink"><Stat value={stat} /></li>)}</ul>}
        <p className="meta mt-3">{item.badge}{project.year && <> · {project.year}</>}</p>
        <span className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-full bg-ink px-4 text-sm font-medium text-white transition-colors group-hover:bg-rust">{t.projects.cta}<ArrowRight size={14} aria-hidden="true" /></span>
      </motion.div>
    </Link>
  )
}

// Curva de la historia.
const curvePoints = [[-30, 430], [140, 360], [300, 410], [560, 455], [880, 300], [1150, 330], [1430, 30]]
const curvePath = (() => {
  const p = curvePoints
  let d = `M${p[0][0]},${p[0][1]}`
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] ?? p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] ?? p2
    d += ` C${p1[0] + (p2[0] - p0[0]) / 6},${p1[1] + (p2[1] - p0[1]) / 6} ${p2[0] - (p3[0] - p1[0]) / 6},${p2[1] - (p3[1] - p1[1]) / 6} ${p2[0]},${p2[1]}`
  }
  return d
})()
const storyNodes = [
  { key: 'ordered', point: 2, label: [190, 300], line: 'M225 320 Q262 360 288 395' },
  { key: 'ai', point: 3, label: [560, 330], arrow: 'M552 345 Q548 395 560 425 M548 412 L560 428 L572 413' },
  { key: 'secure', point: 4, label: [880, 175], line: 'M882 195 Q878 245 880 285' },
  { key: 'cicd', point: 5, label: [1290, 420], line: 'M1250 372 Q1205 362 1172 346' },
]

function StoryCurve() {
  const { t } = useLang()
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const compact = useCompact()
  const [active, setActive] = useState(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'center 55%'] })
  const draw = useTransform(scrollYProgress, [0, 1], [0, 1])
  const text = active ? t.story.nodes[active].text : t.story.intro
  const choose = key => setActive(active === key ? null : key)

  return (
    <section ref={ref} aria-labelledby="story-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <motion.h2 id="story-title" initial={reduce ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.7 }} className="display text-[2rem] leading-[1.05] sm:ml-[12%] sm:text-5xl">{t.story.title[0]}<br />{t.story.title[1]}</motion.h2>
      </div>
      <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2 sm:-mt-16">
        <svg viewBox="0 0 1400 520" className="h-auto w-full overflow-visible" role="group" aria-label={t.story.title.join(' ')}>
          <motion.path d={curvePath} fill="none" stroke="#2e2e2e" strokeWidth="22" strokeLinecap="round" style={reduce || compact ? undefined : { pathLength: draw }} />
          {storyNodes.map(node => {
            const [x, y] = curvePoints[node.point]
            const isAi = node.key === 'ai'
            const on = active === node.key
            return (
              <g key={node.key} role="button" tabIndex={0} aria-pressed={on} aria-label={t.story.nodes[node.key].label} onClick={() => choose(node.key)} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(node.key) } }} className="cursor-pointer outline-none [&:focus-visible_circle]:stroke-rust">
                <motion.g initial={reduce || compact ? false : { opacity: 0, scale: 0.4 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.8 }} transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.15 * node.point }} style={{ transformOrigin: `${x}px ${y}px` }}>
                  <circle cx={x} cy={y} r="34" fill="transparent" />
                  <circle cx={x} cy={y} r={on || isAi ? 22 : 19} fill={isAi ? LEAF : on ? ACCENT : '#2e2e2e'} stroke={isAi ? LEAF : on ? ACCENT : '#2e2e2e'} strokeWidth="6" className="transition-all duration-300" />
                  <circle cx={x} cy={y} r={on || isAi ? 9 : 8} fill="#2e2e2e" />
                  <text x={node.label[0]} y={node.label[1]} textAnchor="middle" fontFamily="'Geist Variable', system-ui, sans-serif" fontWeight="650" fontSize="40" letterSpacing="-1" fill={isAi ? LEAF : on ? ACCENT : '#2e2e2e'} className="transition-colors">{t.story.nodes[node.key].label}</text>
                  {node.line && <path d={node.line} fill="none" stroke="#2e2e2e" strokeWidth="3.5" strokeLinecap="round" />}
                  {node.arrow && <path d={node.arrow} fill="none" stroke={LEAF} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />}
                  {isAi && <text x={x - 40} y={y + 74} textAnchor="middle" fontFamily="'Geist Mono Variable', ui-monospace, monospace" fontSize="20" fill="#71717a">↖ {t.story.tap}</text>}
                </motion.g>
              </g>
            )
          })}
        </svg>
      </div>
      <div className="mx-auto max-w-6xl px-5">
        <p aria-live="polite" className="ml-auto mt-6 max-w-md text-base leading-7 text-zinc-500 sm:text-right sm:text-lg"><Rich parts={text} /></p>
      </div>
    </section>
  )
}

// Muro de experimentos: las columnas se configuran en content.js (`wall`).
const wallColumns = wall

// Video del muro: se descarga y reproduce solo cuando está a la vista; con movimiento reducido muestra el primer cuadro.
function WallVideo({ src, poster, className }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  useEffect(() => {
    const video = ref.current
    if (!video || reduce) return
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) video.play().catch(() => {}); else video.pause() }, { threshold: 0.25 })
    observer.observe(video)
    return () => observer.disconnect()
  }, [reduce])
  return <video ref={ref} src={src} loop muted playsInline disablePictureInPicture disableRemotePlayback poster={poster} preload={reduce ? 'metadata' : 'none'} aria-hidden="true" className={className} />
}

// Terminal del muro: muestra, línea a línea, cómo trabajo con agentes de IA (cifras reales del ERP V2).
function AgentsTile() {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const { file, lines, note } = t.wall.agents
  const line = i => ({ hidden: { opacity: 0, x: -6 }, show: { opacity: 1, x: 0, transition: { delay: 0.3 + i * 0.35 } } })
  return (
    <motion.div initial={reduce ? false : 'hidden'} whileInView="show" viewport={{ once: true, amount: 0.5 }} className="overflow-hidden rounded-xl bg-[#161b1e] font-mono text-[10.5px] leading-6 text-zinc-300 shadow-sm sm:text-xs lg:text-[13px] lg:leading-7">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2.5 sm:px-4"><span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" /><span className="ml-2 truncate text-zinc-500">{file}</span></div>
      <div className="p-3 sm:p-5">
        {lines.map(([pre, code], i) => <motion.p key={i} variants={line(i)} className="break-words"><span className={pre.trim() === '✓' ? 'text-emerald-400' : 'text-sky-300'}>{pre}</span>{code}</motion.p>)}
        <motion.p variants={line(lines.length)}><span className="text-emerald-400">$ </span><span aria-hidden="true" className="terminal-cursor inline-block h-[1em] w-[0.5em] translate-y-[0.15em] bg-zinc-300" /></motion.p>
      </div>
      <p className="border-t border-white/10 px-3 py-2 text-[10px] text-zinc-500 sm:px-5 sm:text-[11px]">{note}</p>
    </motion.div>
  )
}

function WallTile({ tile }) {
  const { t } = useLang()
  if (tile.agents) return <AgentsTile />
  if (tile.text) return (
    <div className="rounded-xl bg-paper p-5 sm:p-7">
      <p className="eyebrow mb-3">{t.wall.label}</p>
      <p className="text-sm font-medium leading-6 text-ink lg:text-base lg:leading-7"><Rich parts={t.wall.text} /></p>
    </div>
  )
  if (tile.code) return <CodeArt art={tile.code} className="aspect-[4/3] rounded-xl" />
  const shape = tile.tall ? 'aspect-[3/5]' : tile.wide ? 'aspect-video' : tile.natural ? 'h-auto' : 'aspect-[4/3]'
  // Video corto, sin sonido y en bucle; con movimiento reducido se queda quieto.
  if (tile.video) return wallVideos[tile.video] ? <WallVideo src={wallVideos[tile.video]} poster={wallImages[tile.video]} className={`w-full rounded-xl object-cover shadow-sm ${shape}`} /> : null
  // Sin foto todavía en src/assets/wall/: no se muestra nada.
  if (!wallImages[tile.img]) return null
  return <img src={wallImages[tile.img]} alt="" loading="lazy" decoding="async" className={`w-full rounded-xl object-cover object-top shadow-sm ${shape}`} />
}

function WallColumn({ tiles, progress, speed }) {
  const y = useTransform(progress, [0, 1], [speed, -speed])
  return <motion.div style={{ y }} className="flex flex-col gap-2 sm:gap-3">{tiles.map((tile, i) => <WallTile key={i} tile={tile} />)}</motion.div>
}

function ExperimentWall() {
  const { t } = useLang()
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const compact = useCompact()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const speeds = reduce ? [0, 0, 0, 0] : [40, 110, 20, 80]
  const mobile = [[...wallColumns[0], ...wallColumns[2]], [...wallColumns[1], ...wallColumns[3]]]
  return (
    <section ref={ref} aria-label={t.wall.label} className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-16">
      {compact
        ? <div className="grid grid-cols-2 gap-2 px-2">{mobile.map((tiles, i) => <WallColumn key={i} tiles={tiles} progress={scrollYProgress} speed={0} />)}</div>
        : <div className="grid grid-cols-4 gap-3 px-3">{wallColumns.map((tiles, i) => <WallColumn key={i} tiles={tiles} progress={scrollYProgress} speed={speeds[i]} />)}</div>}
    </section>
  )
}

function Closing() {
  const { t } = useLang()
  return (
    <section aria-labelledby="closing-title" className="mx-auto max-w-3xl px-5 py-24 text-center sm:py-32">
      <p className="eyebrow">{t.closing.note}</p>
      <h2 id="closing-title" className="display mt-3 text-4xl leading-[1.05] sm:text-6xl">{t.closing.title}</h2>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a href={`mailto:${contact.email}`} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-rust px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"><Mail size={16} aria-hidden="true" />{t.closing.write}</a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-zinc-900/15 bg-white px-6 text-sm font-medium transition-colors hover:border-zinc-900/40">LinkedIn<ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
      <p className="meta mt-6 flex flex-wrap items-center justify-center gap-1.5"><MapPin size={14} aria-hidden="true" />{t.closing.location} · {contact.email}</p>
    </section>
  )
}

export default function Home() {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const [frameRefs] = useState(() => projects.map(() => createRef()))
  return (
    <>
      <Intro />
      {!reduce && createPortal(<div aria-hidden="true">{projects.map((project, i) => <FlyingCard key={project.key} project={project} index={i} total={projects.length} target={frameRefs[i]} />)}</div>, document.body)}
      <section id="proyectos" aria-label={t.dock.works} className={`relative z-10 mx-auto max-w-5xl space-y-24 px-5 pb-10 pt-4 sm:space-y-32 ${reduce ? '' : 'md:-mt-[30vh]'}`}>
        {projects.map((project, i) => <ProjectRow key={project.key} project={project} index={i} frameRef={frameRefs[i]} />)}
        <p className="meta text-center">{t.projects.more}</p>
      </section>
      <StoryCurve />
      <ExperimentWall />
      <Closing />
    </>
  )
}
