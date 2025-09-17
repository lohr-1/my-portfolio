import { useEffect, useState } from 'react'

/**
 * Hook para detectar se o header já rolou além de um offset
 */
export function useHeaderScrolled(offset: number = 20) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return scrolled
}

/**
 * Função utilitária para rolar suavemente até uma seção
 */
export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return

  const headerHeight = document.querySelector('header')?.clientHeight || 0
  const pos = el.getBoundingClientRect().top + window.scrollY - headerHeight

  window.scrollTo({ top: pos, behavior: 'smooth' })
}
