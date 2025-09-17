import { useState } from 'react'
import Header from './components/common/Header'       // ou layout/Header se for seu caminho
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ScrollTopButton from './components/common/ScrollTopButton'
import IntroScreen from './components/common/IntroScreen'
import Footer from './components/common/Footer'

export default function App() {
  const [intro, setIntro] = useState(true)

  return (
    <>
      <IntroScreen show={intro} onDone={() => setIntro(false)} />

      {!intro && (
        <>
          <Header />
          <main>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
           <Footer />     
          <ScrollTopButton />
        </>
      )}
    </>
  )
}
