import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problems from '@/components/Problems'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problems />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
