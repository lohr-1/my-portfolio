import Section from '../components/common/Section'
import ProjectCard from '../components/common/ProjectCard'
import { projects } from '../content/projects'

export default function Projects() {
  return (
    <Section id="projects" title="Projetos">
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  )
}
