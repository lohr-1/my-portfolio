import { useState } from 'react'
import { useHeaderScrolled, scrollToSection } from '@/hooks/useScroll'

const LINKS = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'Sobre' },
  { to: 'skills', label: 'Habilidades' },
  { to: 'projects', label: 'Projetos' },
  { to: 'contact', label: 'Contato' },
]

export default function Header() {
  const scrolled = useHeaderScrolled(20)
  const [open, setOpen] = useState(false)

  const handleGo = (id: string) => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
// antes: tinha style com background branco
<header data-fixed className={`header ${scrolled ? 'scrolled' : ''}`}>

      <div className="container">
        <nav className="nav" aria-label="primary">
          <button
            onClick={() => handleGo('home')}
            className="logo"
            aria-label="Ir para o início"
          >
            Teste<span>.dev</span>
          </button>

          <div className="nav-links">
            {LINKS.map((l) => (
              <button key={l.to} className="nav-link" onClick={() => handleGo(l.to)}>
                {l.label}
              </button>
            ))}
          </div>

          <button
            className="mobile-menu-btn"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <i className="fas fa-bars" />
          </button>
        </nav>

        {open && (
          <div id="mobileMenu" className="mobile-menu">
            <div className="mobile-menu-links">
              {LINKS.map((l) => (
                <button
                  key={l.to}
                  className="mobile-nav-link"
                  onClick={() => handleGo(l.to)}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
