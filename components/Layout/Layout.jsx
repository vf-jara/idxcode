import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Head from 'next/head';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Idxcode</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:description" content="Desenvolvimento de sites, gestão de tráfego e criação de chatbots. Cuidamos de toda tecnologia necessária para a sua empresa crescer no ambiente digital enquanto você se concentra em cuidar do seu negócio! " key="description" />
                <meta name="description" content="Desenvolvimento de sites, gestão de tráfego e criação de chatbots. Cuidamos de toda tecnologia necessária para a sua empresa crescer no ambiente digital enquanto você se concentra em cuidar do seu negócio!" />
            </Head>

            <Navbar />
            <main className="mt-20">{children}</main>
            <Footer />
        </>
    )
}