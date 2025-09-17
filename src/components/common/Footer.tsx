export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">Lohr<span className="dot">'s</span> Portfolio</span>
          <p className="muted">Interfaces modernas, acessíveis e com performance.</p>
        </div>

        <nav className="footer-nav" aria-label="Social links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="mailto:teste.test@example.com" aria-label="E-mail">
            <i className="fas fa-envelope" />
          </a>
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <small>© {year} Felipe Lohr — Todos os direitos reservados.</small>
        </div>
      </div>
    </footer>
  )
}
