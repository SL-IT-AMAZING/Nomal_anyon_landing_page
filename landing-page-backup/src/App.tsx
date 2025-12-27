import { useEffect } from 'react'
import {
  Hero,
  Threat,
  Portfolio1,
  Problem,
  Solution,
  Portfolio2,
  Value,
  Benefits,
  Portfolio3,
  Offer,
  Features,
  Urgency,
  FinalCTA,
  Footer
} from './sections'

function App() {
  // Scroll reveal animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.scroll-reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen w-full">
      <Hero />
      <Threat />
      <Portfolio1 />
      <Problem />
      <Solution />
      <Portfolio2 />
      <Value />
      <Benefits />
      <Portfolio3 />
      <Offer />
      <Features />
      <Urgency />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
