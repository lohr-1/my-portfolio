type ToastProps = {
  open: boolean
  type?: 'success' | 'error'
  title?: string
  message?: string
  onClose: () => void
}

export default function Toast({ open, type = 'success', title, message, onClose }: ToastProps) {
  if (!open) return null
  return (
    <div className="toast">
      <div className={`toast-icon ${type === 'success' ? 'ok' : 'err'}`}>
        <i className={`fas ${type === 'success' ? 'fa-check' : 'fa-times'}`} />
      </div>
      <div className="toast-body">
        <strong>{title}</strong>
        <div>{message}</div>
      </div>
      <button className="toast-close" aria-label="Fechar" onClick={onClose}>
        <i className="fas fa-times" />
      </button>
    </div>
  )
}
