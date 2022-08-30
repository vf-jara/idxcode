import Hero from "../components/hero/Hero";
import Services from "../components/serviceSection/Services";
import Projects from "../components/projectsSection/Projects";
import Contact from "../components/contactSection/Contact";
import Layout from '../components/Layout/Layout';
import Script from 'next/script'
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Layout>
        <Head>
            <meta charSet="utf-8" />
            <title>Idxcode</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:description" content="Desenvolvimento de sites, gestão de tráfego e criação de chatbots. Cuidamos de toda tecnologia necessária para a sua empresa crescer no ambiente digital enquanto você se concentra em cuidar do seu negócio! " key="description" />
            <meta name="description" content="Desenvolvimento de sites, gestão de tráfego e criação de chatbots. Cuidamos de toda tecnologia necessária para a sua empresa crescer no ambiente digital enquanto você se concentra em cuidar do seu negócio!" />
        </Head>
        <Hero/>
        <Services/>
        <Projects />
        <Contact />
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
      </Layout>
    </>
  )
}
