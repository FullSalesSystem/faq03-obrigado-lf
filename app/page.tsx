import { About } from '@/components/About'
import { AcademyHero } from '@/components/AcademyHero'
import { Flix } from '@/components/Flix'
import { Footer } from '@/components/Footer'
import { Modules } from '@/components/Modules'
import { Navbar } from '@/components/Navbar'
import { Offer } from '@/components/Offer'
import { Press } from '@/components/Press'
import { Trust } from '@/components/Trust'

export default function Home() {
  return (
    <main style={{ backgroundColor: '#F5F6F8', color: '#0A0A0A', overflowX: 'hidden' }}>
      <Navbar />
      <AcademyHero />
      <Modules />
      <Flix />
      <Trust />
      <Offer />
      <About />
      <Press />
      <Footer />
    </main>
  )
}
