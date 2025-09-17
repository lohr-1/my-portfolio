import { useCallback, useState } from 'react'

export function useToast() {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState<'success' | 'error'>('success')
  const [title, setTitle] = useState('Tudo certo')
  const [message, setMessage] = useState('')

  const show = useCallback((t: 'success' | 'error', ti: string, msg: string) => {
    setType(t); setTitle(ti); setMessage(msg); setOpen(true)
    window.setTimeout(() => setOpen(false), 4000)
  }, [])

  const close = useCallback(() => setOpen(false), [])

  return { open, type, title, message, show, close }
}
