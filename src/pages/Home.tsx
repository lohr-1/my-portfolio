import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section id="home" className="section">
      <div className="container hero-grid">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            style={{ fontSize: '40px', margin: 0 }}
          >
            Olá, eu sou <span style={{ color: 'var(--accent)' }}>Lohr</span>
          </motion.h2>

          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: .95, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6, delay: .1 }}
          >
            Desenvolvedor focado em interfaces modernas, acessíveis e com performance — priorizando UX e animações discretas.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5, delay: .2 }}
            style={{ display: 'flex', gap: 12, marginTop: 16 }}
          >
            <button className="btn primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              Ver projetos
            </button>
            <button className="btn outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Fale comigo
            </button>
          </motion.div>

          <div className="social">
            <a href="https://github.com" aria-label="GitHub"><i className="fab fa-github" /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
            <a href="mailto:teste.test@example.com" aria-label="E-mail"><i className="fas fa-envelope" /></a>
          </div>
        </div>

        <motion.div
          className="imgwrap"
          initial={{ opacity: 0, scale: .96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .6, ease: 'easeOut' }}
        >
          <img
            src="https://img.freepik.com/vetores-gratis/laptop-com-icone-de-codigo-isometrico-de-programa-desenvolvimento-de-software-e-aplicacoes-de-programacao-neon-escuro_39422-971.jpg"
            alt="Ilustração de código"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}
