
import BotaoOrcamento from "../components/botaoOrcamento/BotaoOrcamento";
import Hero from "../components/Hero/Hero";
import Logo from "../components/logo/Logo";
import Menu from "../components/menu/Menu";
import Navbar from "../components/Navbar/Navbar";


export default function Home() {
  return (
    <>
      <div className="container mx-auto px-5">
        <Navbar />

      </div>
      <div>
        <Hero />
      </div>
    </>
  )
}
