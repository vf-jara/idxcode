import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Services from "../components/serviceSection/Services";




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
    </>
  )
}
