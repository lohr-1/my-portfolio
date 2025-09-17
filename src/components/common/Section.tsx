import { PropsWithChildren } from 'react'

type Props = {
  id: string
  title: string
  subtitle?: string
}

export default function Section({ id, title, subtitle, children }: PropsWithChildren<Props>) {
  return (
    <section id={id} className="section">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </header>
        <div className="section-body">{children}</div>
      </div>
    </section>
  )
}
