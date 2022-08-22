import Hero from "../components/hero/Hero";
import Services from "../components/serviceSection/Services";
import Projects from "../components/projectsSection/Projects";
import Contact from "../components/contactSection/Contact";
import Script from 'next/script'


export default function Home() {
  return (
    <>
      <Hero/>
      <Services/>
      <Projects />
      <Contact />
      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
    </>
  )
}
