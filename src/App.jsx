import { Suspense, lazy, useEffect } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import { profile } from './content.js'
import { routes, useLang, useLocation } from './lib.js'
import { LangProvider } from './components/Core.jsx'
import { Dock, Header } from './components/Chrome.jsx'
import Home from './pages/Home.jsx'
// /proyectos y /sobre-mi se descargan al visitarlas: el inicio carga más rápido.
const Works = lazy(() => import('./pages/Works.jsx'))
const About = lazy(() => import('./pages/About.jsx'))

const year = new Date().getFullYear()

function Page({ path, search }) {
  if (path === routes.works) return <Works search={search} />
  if (path === routes.about) return <About />
  return <Home />
}

function Shell() {
  const { t } = useLang()
  const { path, search } = useLocation()

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [path])

  return (
    <>
      <a href="#contenido" className="sr-only z-[60] bg-rust p-4 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">{t.skip}</a>
      <Header />
      <AnimatePresence mode="wait">
        <motion.main key={path} id="contenido" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}>
          <Suspense fallback={<div className="min-h-screen" />}><Page path={path} search={search} /></Suspense>
          <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-5 pb-32 text-xs text-zinc-400"><p>© {year} {profile.fullName}</p><p>{t.footer}</p></footer>
        </motion.main>
      </AnimatePresence>
      <Dock path={path} />
    </>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LangProvider><Shell /></LangProvider>
    </MotionConfig>
  )
}
