import { FormEvent, useState } from 'react'
import Toast from '@/components/common/Toast'
import { useToast } from '@/hooks/useToast'

type Errors = Partial<Record<'option'|'name'|'email'|'subject'|'message', string>>

export default function Contact() {
  const { open, type, title, message, show, close } = useToast()

  const [form, setForm] = useState({
    option: '',
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Errors>({})

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  function validate(): boolean {
    const e: Errors = {}
    if (!form.option) e.option = 'Selecione uma opção'
    if (!form.name || form.name.trim().length < 2) e.name = 'Nome deve ter ao menos 2 caracteres'
    if (!isValidEmail(form.email)) e.email = 'Informe um e-mail válido'
    if (!form.subject || form.subject.trim().length < 2) e.subject = 'Assunto muito curto'
    if (!form.message || form.message.trim().length < 10) e.message = 'Mensagem mínima de 10 caracteres'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    // simula envio
    console.log('Form Data:', form)
    show('success', 'Mensagem enviada!', 'Obrigado. Retorno em breve.')
    setForm({ option: '', name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="container" style={{ padding: '72px 0' }}>
      <h1 style={{ textAlign: 'center' }}>Contato</h1>

      <form className="form" onSubmit={onSubmit} noValidate>
        <div className="form-group">
          <label className="label">Serviço desejado</label>
          <div className="radio-row">
            <label className="radio">
              <input
                type="radio"
                name="option"
                value="graphic"
                checked={form.option === 'graphic'}
                onChange={onChange}
              />
              <span>Graphic Design</span>
            </label>
            <label className="radio">
              <input
                type="radio"
                name="option"
                value="motion"
                checked={form.option === 'motion'}
                onChange={onChange}
              />
              <span>Motion Design</span>
            </label>
          </div>
          {errors.option && <p className="error">{errors.option}</p>}
        </div>

        <div className="grid2">
          <div className="form-group">
            <label htmlFor="name" className="label">Seu nome</label>
            <input id="name" name="name" value={form.name} onChange={onChange} className="input" />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="label">E-mail</label>
            <input id="email" name="email" value={form.email} onChange={onChange} className="input" />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="label">Assunto</label>
          <input id="subject" name="subject" value={form.subject} onChange={onChange} className="input" />
          {errors.subject && <p className="error">{errors.subject}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="label">Mensagem</label>
          <textarea id="message" name="message" value={form.message} onChange={onChange} className="textarea" />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button className="btn primary" type="submit">Enviar mensagem</button>
      </form>

      <Toast open={open} type={type} title={title} message={message} onClose={close} />
    </section>
  )
}
