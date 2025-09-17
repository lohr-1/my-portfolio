import Section from '../components/common/Section'
import { about } from '../content/profile'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">Sobre mim</h2>
        <p className="section-subtitle">Minha jornada</p>

        <p className="muted" style={{maxWidth: '70ch'}}>
          Sou um desenvolvedor full stack apaixonado, focado em aplicações web que resolvem
          problemas do mundo real. Valorizo código limpo, acessibilidade e performance.
        </p>
        <p className="muted" style={{maxWidth: '70ch'}}>
          Quando não estou programando, curto trilhas, fotografia e ler sobre tecnologia.
        </p>

        {/* Features (apenas Web e UI/UX) */}
        <div className="about-features">
          <div className="feature">
            <i className="fas fa-code" />
            <div>
              <h4>Web</h4>
              <p className="muted">Apps responsivos e acessíveis com React/TS</p>
            </div>
          </div>

          <div className="feature">
            <i className="fas fa-pen-nib" />
            <div>
              <h4>UI/UX</h4>
              <p className="muted">Interfaces limpas e centradas no usuário</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
