import { useEffect, useState } from 'react'

export function useHeaderScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const header = document.querySelector('header[data-fixed]') as HTMLElement | null
  const headerHeight = header?.offsetHeight ?? 0
  const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight
  window.scrollTo({ top: y, behavior: 'smooth' })
}
