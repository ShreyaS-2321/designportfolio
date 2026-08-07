import About from './components/About'
import CatSection from './components/CatSection'
import Contact from './components/Contact'
import DeskSection from './components/DeskSection'
import GreetingMarquee from './components/GreetingMarquee'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <GreetingMarquee />
        <About />
        <CatSection />
        <Projects />
        <DeskSection />
        <Contact />
      </main>
    </div>
  )
}
