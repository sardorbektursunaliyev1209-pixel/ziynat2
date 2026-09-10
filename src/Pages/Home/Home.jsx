import Hero from "./Sections/Hero"
import About from "./Sections/About"
import AboutCompany from "./Sections/AboutCompany"
import Contact from "./Sections/Contact"
import Footer from "./Sections/Footer"
import Houses from "./Sections/Houses"
import Services from "./Sections/Services"
import Testimonials from "./Sections/Testimonials"
import Navbar from "./Sections/Navbar"
import FloatingContact from "./Sections/FloatingContact"

function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Houses/>
    <AboutCompany/>
    <Services/>

    <Testimonials/>
    <Contact/>
    <Footer/>
    <FloatingContact />
    </>
  )
}

export default Home