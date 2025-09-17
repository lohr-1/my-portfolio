import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  show: boolean
  onDone: () => void
  title?: string
}

export default function IntroScreen({ show, onDone, title = "Lohr's Portfolio" }: Props) {
  const finish = useCallback(() => onDone(), [onDone])

  useEffect(() => {
    if (!show) return
    const t = setTimeout(finish, 2300) // auto-hide suave
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') finish() }
    window.addEventListener('keydown', onKey)
    return () => { clearTimeout(t); window.removeEventListener('keydown', onKey) }
  }, [show, finish])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro-wrap intro-vignette"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          onClick={finish}
          aria-label="Tela inicial, clique ou pressione Enter para entrar"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className="intro-inner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: .6, ease: 'easeOut' } }}
          >
            <motion.h1
              className="intro-title"
              initial={{ letterSpacing: '0.4em', color: '#ffffff' }}
              animate={{ letterSpacing: '.02em', color: '#ffffff', transition: { duration: .9, ease: 'easeOut' } }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="intro-sub"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: .9, y: 0, transition: { delay: .4, duration: .5 } }}
            >
              Pressione <strong>Enter</strong> ou clique para continuar
            </motion.p>
            <motion.div
              className="intro-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: .6, transition: { delay: 1.2 } }}
            >
              experiência imersiva • animações suaves • alto contraste
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
