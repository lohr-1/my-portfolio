import Section from '../components/common/Section'
import { skills } from '../content/profile'

const stacks = [
  { label: 'React / TypeScript', level: 85 },
  { label: 'Node.js', level: 75 },
  { label: 'HTML5 & CSS3', level: 95 },
  { label: 'SQL & NoSQL', level: 70 },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>

        <div className="skills-list">
          {stacks.map(s => (
            <div key={s.label} className="skill-item">
              <div className="skill-top">
                <span>{s.label}</span>
                <span>{s.level}%</span>
              </div>
              <div className="skill-bar" aria-label={`${s.label} ${s.level}%`}>
                <div className="skill-fill" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
