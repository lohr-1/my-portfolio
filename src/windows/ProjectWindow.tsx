type Project = { name: string; url: string };

const PROJECTS: Project[] = [
  { name: "Plataforma de E-commerce", url: "https://github.com/seu-usuario/ecommerce" },
  { name: "App de Tarefas", url: "https://github.com/seu-usuario/todo-app" },
  { name: "Painel Social", url: "https://github.com/seu-usuario/social-panel" },
];

export default function ProjectsWindow() {
  return (
    <div>
      <p>Projetos (links):</p>
      <ul>
        {PROJECTS.map((p) => (
          <li key={p.name}>
            <a href={p.url} target="_blank" rel="noreferrer">
              {p.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
