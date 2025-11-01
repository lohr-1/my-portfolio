type Project = { name: string; url: string };

const PROJECTS: Project[] = [
  { name: "Formulário de Registro", url: "https://github.com/lohr-1/registration-form" },
  { name: "The Dog API", url: "https://github.com/lohr-1/thedogapi" },
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
