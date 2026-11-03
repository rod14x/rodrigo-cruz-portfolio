import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ExternalLink, Github } from 'lucide-react'
import { projects, tabs } from '../content.js'
import { galleries, projectImages, useLang } from '../lib.js'
import { CodeArt } from '../components/Decor.jsx'

function Section({ title, children }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-wide text-zinc-500">{title}</h3>
      <div className="mt-1.5 text-[15px] leading-7 text-zinc-600">{children}</div>
    </div>
  )
}

const external = { target: '_blank', rel: 'noopener noreferrer' }

function Case({ project }) {
  const { t, pick } = useLang()
  const item = t.projects.items[project.key]
  const s = t.projects.sections
  const name = pick(project.name)
  const image = projectImages[project.image]
  const photos = galleries[project.key] ?? []
  return (
    <motion.article id={project.key} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.35 }} aria-labelledby={`${project.key}-title`} className="grid scroll-mt-24 gap-8 rounded-3xl border border-zinc-900/10 bg-white/80 p-5 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.4)] sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
      <div>
        <div style={{ backgroundColor: project.tint }} className="rounded-2xl p-2.5">
          {image ? <img src={image} alt="" className="aspect-[16/10] w-full rounded-lg object-cover object-top" /> : <CodeArt art={project.art} className="aspect-[16/10] rounded-lg" />}
        </div>
        <ul className="mt-4 flex flex-wrap gap-2">{project.tags.map(tag => <li key={tag} className="rounded-full border border-zinc-900/10 bg-white px-3 py-1 text-xs text-ink">{pick(tag)}</li>)}</ul>
        {(project.live || project.code) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.live && <a href={project.live} {...external} className="inline-flex min-h-10 items-center gap-2 rounded-full bg-ink px-4 text-sm font-medium text-white transition-colors hover:bg-rust">{name}<ExternalLink size={14} aria-hidden="true" /><span className="sr-only">({t.projects.newTab})</span></a>}
            {project.code && <a href={project.code} {...external} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-zinc-900/15 bg-white px-4 text-sm font-medium transition-colors hover:border-zinc-900/40"><Github size={14} aria-hidden="true" />GitHub<span className="sr-only">({t.projects.newTab})</span></a>}
          </div>
        )}
        {photos.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xs font-bold uppercase tracking-wide text-zinc-500">{s.gallery}</h3>
            <ul className="mt-2 grid grid-cols-3 gap-2">{photos.map((src, i) => (
              <li key={src}><a href={src} {...external} className="block overflow-hidden rounded-lg ring-2 ring-transparent transition-shadow hover:ring-rust"><img src={src} alt={`${name} — ${s.gallery} ${i + 1}`} loading="lazy" className="aspect-square w-full object-cover" /></a></li>
            ))}</ul>
          </div>
        )}
      </div>
      <div className="space-y-6">
        <div>
          <p className="hand text-lg">{name} · {item.org}{project.year ? ` · ${project.year}` : ''}</p>
          <h2 id={`${project.key}-title`} className="display text-2xl leading-[1.12] tracking-[-0.035em] sm:text-3xl">{item.title}</h2>
          <p className="mt-3 text-base leading-7 text-zinc-600">{item.desc}</p>
        </div>
        <Section title={s.context}><p>{item.context}</p></Section>
        <Section title={s.problem}><p>{item.problem}</p></Section>
        <Section title={`${s.role} · ${item.badge}`}>
          <ul className="space-y-1.5">{item.role.map(point => <li key={point} className="flex gap-3"><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" /><span>{point}</span></li>)}</ul>
        </Section>
        <Section title={s.team}><p>{item.team}</p></Section>
        {item.evidence.length > 0 && (
          <Section title={s.evidence}>
            <ul className="space-y-1.5">{item.evidence.map(e => <li key={e.label}>{e.href ? <a href={e.href} {...external} className="inline-flex items-center gap-1.5 underline decoration-dotted underline-offset-4 hover:text-rust">{e.label}<ExternalLink size={13} aria-hidden="true" /><span className="sr-only">({t.projects.newTab})</span></a> : e.label}</li>)}</ul>
          </Section>
        )}
      </div>
    </motion.article>
  )
}

export default function Works({ search }) {
  const { t } = useLang()
  const tab = tabs.includes(search.get('tab')) ? search.get('tab') : 'all'
  const count = key => key === 'all' ? projects.length : projects.filter(p => p.tabs.includes(key)).length
  const select = key => {
    window.history.replaceState({}, '', key === 'all' ? window.location.pathname : `?tab=${key}`)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }
  const visible = tab === 'all' ? projects : projects.filter(p => p.tabs.includes(tab))

  // Al llegar desde el inicio con /proyectos#caso, baja hasta ese caso cuando termina la transición.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    const timer = setTimeout(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }), 450)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="mx-auto max-w-6xl px-5 pb-40 pt-28 sm:pt-32">
      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="display text-4xl sm:text-6xl">{t.works.title}</motion.h1>
      <p className="hand mt-1 text-xl">{t.works.subtitle}</p>
      <div role="tablist" aria-label={t.works.title} className="mt-8 flex w-fit max-w-full gap-1 overflow-x-auto rounded-full bg-zinc-900/[0.06] p-1">
        {tabs.map(key => (
          <button key={key} type="button" role="tab" aria-selected={tab === key} onClick={() => select(key)} className={`relative flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors sm:px-4 ${tab === key ? 'text-ink' : 'text-zinc-500 hover:text-ink'}`}>
            {tab === key && <motion.span layoutId="tab-pill" transition={{ type: 'spring', stiffness: 420, damping: 34 }} className="absolute inset-0 rounded-full bg-white shadow-sm" />}
            <span className="relative flex items-center gap-1.5">{t.works.tabs[key]}<span className={`text-xs ${tab === key ? 'text-rust' : 'text-zinc-400'}`}>{count(key)}</span></span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait"><motion.p key={tab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="hand mt-6 text-lg">{t.works.tabNotes[tab]}</motion.p></AnimatePresence>
      <motion.div role="tabpanel" layout className="mt-8 space-y-8">
        <AnimatePresence mode="popLayout">{visible.map(project => <Case key={project.key} project={project} />)}</AnimatePresence>
      </motion.div>
    </div>
  )
}
