type ProjectProps = {
  project: {
    title: string
    description: string
    tags: string[]
    image: string
    repo?: string
  }
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="project-card">
      <div className="project-header">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            <i className="fab fa-github"></i>
          </a>
        )}
      </div>

      <img src={project.image} alt={project.title} className="project-img" />

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
