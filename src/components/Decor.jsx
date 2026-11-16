import { useLang } from '../lib.js'

// Cursor de terminal que parpadea; quieto con movimiento reducido (ver index.css).
export function TerminalCursor({ className = '' }) {
  return <span aria-hidden="true" className={`terminal-cursor inline-block h-[0.82em] w-[0.14em] translate-y-[0.04em] rounded-[1px] bg-rust ${className}`} />
}

// Iconos del dock (estilo carpeta, avatar y enlace de macOS).
export function FolderIcon({ color = '#7fb6f0', className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 52" className={className}>
      <path d="M4 8a5 5 0 0 1 5-5h15l6 6h25a5 5 0 0 1 5 5v4H4z" fill={color} style={{ filter: 'brightness(0.86)' }} />
      <rect x="4" y="13" width="56" height="36" rx="5" fill={color} />
      <rect x="4" y="13" width="56" height="5" rx="2" fill="#fff" opacity="0.25" />
    </svg>
  )
}

export function AvatarIcon({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 56 56" className={className}>
      <defs><linearGradient id="avatar-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#dbe9fb" /><stop offset="1" stopColor="#b8d4f6" /></linearGradient></defs>
      <rect width="56" height="56" rx="13" fill="url(#avatar-bg)" />
      <circle cx="28" cy="21" r="8.5" fill="#2f6fd6" />
      <path d="M12 47c1.5-10 8-14.5 16-14.5S42.5 37 44 47z" fill="#2f6fd6" />
    </svg>
  )
}

export function LinkTile({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 56 56" className={className}>
      <rect width="56" height="56" rx="13" fill="#fff" />
      <rect x="0.5" y="0.5" width="55" height="55" rx="12.5" fill="none" stroke="#000" strokeOpacity="0.08" />
      <g fill="none" stroke="#2f6fd6" strokeWidth="4" strokeLinecap="round"><path d="M25 31a7 7 0 0 0 10 0l6-6a7 7 0 0 0-10-10l-2 2" /><path d="M31 25a7 7 0 0 0-10 0l-6 6a7 7 0 0 0 10 10l2-2" /></g>
    </svg>
  )
}

// Logo de marca desde simple-icons.
export function BrandIcon({ icon, className = '', color }) {
  return <svg role="img" aria-label={icon.title} viewBox="0 0 24 24" className={className}><path d={icon.path} fill={color ?? `#${icon.hex}`} /></svg>
}

// Ilustraciones de código para casos sin captura. Los textos con "es|en" se separan por idioma.
const arts = {
  deploy: { file: '.github/workflows/deploy.yml', lines: [['$ ', 'git push origin main'], ['→ ', 'GitHub Actions · deploy'], ['✔ ', 'checkout'], ['✔ ', 'ssh deploy@server'], ['✔ ', 'deployed']] },
  gitflow: { file: 'gitflow', lines: [['$ ', 'git checkout -b feature/…'], ['$ ', 'git push -u origin feature/…'], ['→ ', 'Pull Request → develop'], ['✔ ', 'review aprobado|review approved'], ['$ ', 'git merge --no-ff']] },
  network: { file: 'inventario.csv|inventory.csv', lines: [['# ', 'gabinete,puerto,equipo|cabinet,port,device'], ['', 'GAB-01,P01,AP-01'], ['', 'GAB-01,P02,AP-02'], ['', 'GAB-02,P01,SW-01'], ['# ', 'diagrama: físico + lógico|diagram: physical + logical']] },
  termometro: { file: 'README.md', lines: [['# ', 'Termómetro de Resiliencia|Resilience Thermometer'], ['> ', 'evaluación preliminar gratuita|free preliminary assessment'], ['', ''], ['- ', 'riesgos y contingencias|risks and contingencies'], ['- ', 'brechas → acciones de mejora|gaps → improvement actions']] },
  erp: { file: 'erp · Cloud Tecnologies', lines: [['✔ ', 'proyectos · kanban|projects · kanban'], ['✔ ', 'dashboard'], ['✔ ', 'asistente IA · Gemini|AI assistant · Gemini'], ['✔ ', 'deploy · cPanel'], ['→ ', 'V2 · tests + CI']] },
  keptai: { file: 'README.md', lines: [['# ', 'KeptAI'], ['> ', 'Piura Innova 2026 · Reto 6|Piura Innova 2026 · Challenge 6'], ['', ''], ['- ', 'pagos por WhatsApp → conciliación|WhatsApp payments → reconciliation'], ['- ', 'rentabilidad por pedido|profit per order']] },
}

export function CodeArt({ art, className = '' }) {
  const { pick } = useLang()
  const { file, lines } = arts[art] ?? arts.deploy
  return (
    <div aria-hidden="true" className={`flex flex-col overflow-hidden bg-[#161b1e] font-mono text-[11px] leading-6 text-zinc-300 sm:text-xs ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5"><span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" /><span className="ml-2 truncate text-zinc-500">{pick(file)}</span></div>
      <div className="flex-1 overflow-hidden p-4 sm:p-5">{lines.map(([pre, code], i) => <div key={i} className="truncate whitespace-pre"><span className="text-emerald-400">{pre}</span>{pick(code)}</div>)}</div>
    </div>
  )
}
