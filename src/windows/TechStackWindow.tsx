type Tech = { name: string; notes?: string };

const TECHS: Tech[] = [
  { name: "React.tsx" },
  { name: "Vite" },
  { name: "Node.js" },
  { name: "CSS3.css" },
  { name: "HTML5.html" },
  { name: "JavaScript.js" },
  { name: "UI/UX.fig" },
];

export default function TechStackWindow() {
  return (
    <div>
      <ul>
        {TECHS.map((t) => (
          <li key={t.name}>
            <strong>{t.name}</strong>
            {t.notes ? ` — ${t.notes}` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
