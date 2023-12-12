import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import AboutSection from '@/components/AboutSection'
import Project from '@/components/ProjectSection'
import ContactSection from '@/components/ContactSection'



export default function Home(){
  return (
      <main className="flex min-h-screen flex-col bg-[#121212] py-24">
        <Navbar></Navbar>
        <div className="container mx-auto px-12 py-16">
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <Project></Project>
        <ContactSection></ContactSection>
        </div>
      </main>
  )
}


