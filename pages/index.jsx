import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Services from "../components/serviceSection/Services";
import Projects from "../components/projectsSection/Projects";
import Contact from "../components/contactSection/Contact";




export default function Home() {
  return (
    <>
      <div className="container mx-auto px-5">
        <Navbar />
      </div>
      <section>
        <Hero />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
    </>
  )
}
