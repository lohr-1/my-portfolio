export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <h1>Olá, eu sou <span className="text-primary">Teste Dev</span></h1>
          <h2>Full Stack Developer</h2>
          <p>Eu crio experiências digitais rápidas, acessíveis e centradas no usuário.</p>

          <div className="hero-actions">
            <button className="btn primary" onClick={() => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}>
              Veja meu trabalho
            </button>
            <button className="btn outline" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
              Entre em contato
            </button>
          </div>

          <div className="social">
            <a href="https://github.com" aria-label="GitHub"><i className="fab fa-github" /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
            <a href="https://twitter.com" aria-label="Twitter/X"><i className="fab fa-twitter" /></a>
            <a href="mailto:teste.test@example.com" aria-label="E-mail"><i className="fas fa-envelope" /></a>
          </div>
        </div>

        <div className="hero-media">
          <div className="imgwrap">
            <img
              src="https://img.freepik.com/vetores-gratis/laptop-com-icone-de-codigo-isometrico-de-programa-desenvolvimento-de-software-e-aplicacoes-de-programacao-neon-escuro_39422-971.jpg"
              alt="Notebook com código"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
