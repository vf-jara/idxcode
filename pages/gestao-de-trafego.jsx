import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Formulario from "../components/formulario/formulario";
import { motion } from 'framer-motion';
import { useRef } from "react";

export default function Trafego() {
    const scrollRef = useRef(null);
  return (
    <>
        <Head>
            <meta charSet="utf-8" />
            <title>Gestão de Tráfego Pago - Idxcode</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:description" content="Apareça para as pessoas certas quando elas buscarem pelos seus produtos ou serviços online." key="description" />
            <meta name="description" content="Apareça para as pessoas certas quando elas buscarem pelos seus produtos ou serviços online." />
        </Head>
        <div className="min-h-screen w-full bg-black">
            <div ref={scrollRef} className="flex flex-col py-8 bg-[url('/assets/images/bg-trafego.png')] md:bg-[url('/assets/images/bg-desktop.png')] md:bg-bottom bg-cover">
                <div className="flex flex-col gap-8 px-5 text-center items-center md:justify-center md:items-center md:mx-auto md:min-h-[50vh] md:w-9/12 md:py-16 md:px-20 md:text-center">
                    <Image layout="fixed" objectFit="contain" width="150" height="30" src="/assets/images/logoWhite.png" alt="idxcode" />
                    <motion.div
                        initial={{ opacity: 0, x: "+100%" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true, root: scrollRef }}
                        className="flex flex-col justify-center items-center text-center"
                    >
                        <h1 className="text-white text-3xl font-semibold md:text-5xl md:leading-tight mt-8">Apareça para as{" "}
                        <font className="text-idx-green font-bold">pessoas certas</font>{" "}
                        quando elas buscarem pelo seu produto ou serviço{" "}
                        <font className="text-idx-green font-bold">na internet</font>!</h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        viewport={{ once: true, root: scrollRef }}
                        className="flex flex-col justify-center items-center text-center"
                    >
                        <h2 className="text-white text-lg font-normal leading-8 md:text-xl md:w-10/12 md:mt-4">Existe um grande fluxo de pessoas passando pelas maiores <font className="text-idx-green font-bold">avenidas digitais</font> neste exato momento e olhando <font className="font-bold">vitrines</font> e <font className="font-bold">outdoors virtuais</font> de centenas de milhares de empresas.</h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        viewport={{ once: true, root: scrollRef }}
                        className="flex flex-col justify-center items-center text-center"
                    >
                        <h2 className="text-white text-lg leading-8 font-semibold md:text-2xl md:w-10/12 md:mt-4">A sua empresa está sendo vista nessas <font className="text-idx-green font-bold">avenidas digitais</font>?</h2>
                    </motion.div>
                    <div className="flex justify-center"><Image width="40" height="40" objectFit="contain" className="opacity-75" src="/assets/images/scroll-bar@2x.png" alt="scroll" /></div>
                </div>
            </div>
            <div className="flex flex-col gap-8 px-5 py-8 md:justify-center md:items-center md:mx-auto md:w-8/12 md:gap-12 md:py-16 md:px-20 md:text-center">
                <p className="text-white text-lg md:text-lg">Ainda hoje, <strong>90% dos empresários</strong> não perceberam que estão deixando um <font className="text-idx-green font-bold">caminhão de dinheiro na mesa</font> simplesmente por não acompanhar as mudanças do <font className="text-idx-green font-bold">mundo digital</font>.</p>
                <p className="text-white text-lg md:text-lg">O fato é que, possivelmente, te venderam a ideia de que bastava apenas ter uma página no <strong>Facebook</strong>, um perfil no <strong>Instagram</strong> e um <strong>site</strong> qualquer para aproveitar toda a onda do <strong>Marketing Digital</strong>.</p>
                <p className="text-white text-lg md:text-lg">Mas hoje, com o <strong>comportamento humano totalmente transformado pelo digital</strong>, acelerado especialmente nos últimos dois anos (C***D-19), não basta apenas ter um perfil nas redes sociais e um site meia-boca.</p>
                <p className="text-white text-lg font-bold md:text-lg">É preciso uma comunicação bem planejada e atrair pessoas para essas páginas.</p>
                <p className="text-white text-lg md:text-lg">Mas não é qualquer pessoa.</p>
                <p className="text-white text-lg font-bold md:text-lg">Você precisa atrair pessoas com <font className="text-idx-green">real potencial de compra</font>.</p>
                <p className="text-white text-lg md:text-lg">Pessoas <font className="text-idx-green font-bold">realmente interessadas</font> naquilo que você vende. Pessoas que, de fato, <font className="text-idx-green font-bold">vão comprar de você</font>.</p>
                <p className="text-white text-lg md:text-lg">A nossa função é encurtar o caminho desse público até você.</p>
                <p className="text-white text-lg font-bold md:text-lg">É fazer com que esse fluxo de pessoas, <font className="text-idx-green font-bold">com real interesse e potencial de compra chegue até você</font>.</p>
            </div>
            <div className="flex flex-col gap-8 px-5 py-8 md:justify-center md:items-center md:mx-auto md:w-8/12 md:gap-12 md:py-16 md:px-20 md:text-center">
                <h3 className="text-white text-3xl font-bold md:text-4xl">Como isso é possível?</h3>
                <p className="text-white text-lg md:text-lg">Todo esse cenário digital funciona com base em quatro pilares: <font className="text-idx-green font-bold">Tráfego, Engajamento, Conversão e Retenção</font>.</p>
                <p className="text-white text-lg md:text-lg">O pilar responsável por fazer com que pessoas interessadas e com potencial de compra acessem seu site ou entrem em contato com a sua empresa é o <font className="text-idx-green font-bold">Tráfego</font>.</p>
                <p className="text-white text-lg md:text-lg">Através do <font className="text-idx-green font-bold">Tráfego Pago</font> (que são os <strong>anúncios online</strong>) conseguimos segmentar o público e entregar a sua mensagem para as pessoas certas, no momento ideal.</p>
                <p className="text-white text-lg md:text-lg">
                    O <font className="text-idx-green font-bold">Tráfego Pago</font> é a <strong>estratégia</strong> que separa as empresas que apenas usam as redes sociais das empresas que utilizam as redes como <font className="text-idx-green font-bold">Canais de Venda Ativa</font>, capaz de gerar <strong>milhares de reais em faturamento</strong>.
                </p>
            </div>
            <div className="flex flex-col gap-8 px-5 py-8 md:justify-center md:items-center md:mx-auto md:w-8/12 md:gap-12 md:py-16 md:px-20 md:text-center">
                <h3 className="text-white text-3xl font-bold md:text-4xl">Pra quem é?</h3>
                <p className="text-white text-lg md:text-lg">Nosso serviço é para <font className="text-idx-green font-bold">empresas físicas ou digitais</font>, com <strong>vontade de escalar vendas e faturamento de forma exponencial</strong>.</p>
                <ul className="border-l-4 border-idx-green pl-3 py-1 flex flex-col gap-2  md:text-lg">
                    <li className="text-white flex gap-2">
                        <img src="/assets/images/li.svg" alt="li" /> E-commerce
                    </li>
                    <li className="text-white flex gap-2">
                        <img src="/assets/images/li.svg" alt="li" /> Escolas
                    </li>
                    <li className="text-white flex gap-2">
                        <img src="/assets/images/li.svg" alt="li" /> Lojas de Roupas
                    </li>
                    <li className="text-white flex gap-2">
                        <img src="/assets/images/li.svg" alt="li" /> Academias
                    </li>
                    <li className="text-white flex gap-2">
                        <img src="/assets/images/li.svg" alt="li" /> Dentistas
                    </li>
                    <li className="text-white flex gap-2">
                        <img src="/assets/images/li.svg" alt="li" /> Fisioterapeutas
                    </li>
                    <li className="text-white flex gap-2">
                        <img src="/assets/images/li.svg" alt="li" /> Lojas de Móveis
                    </li>
                    <li className="text-white flex gap-2">
                        <img src="/assets/images/li.svg" alt="li" /> Indústrias
                    </li>
                    <li className="text-white flex gap-2">
                        <img src="/assets/images/li.svg" alt="li" /> Energia Solar
                    </li>
                </ul>
                <p className="text-white text-lg md:text-lg">E qualquer outra área de atuação...</p>
                <p className="text-white text-lg md:text-lg">Independente do seu nicho, com a estratégia certa, o <font className="text-idx-green font-bold">Tráfego Pago</font> pode ser aplicado e trazer <font className="text-idx-green font-bold">resultados reais</font> e <font className="text-idx-green font-bold">mensuráveis</font> para a sua empresa.</p>
            </div>
            <div className="flex flex-col gap-8 px-5 py-8 md:justify-center md:items-center md:mx-auto md:w-8/12 md:gap-12 md:py-16 md:px-20 md:text-center">
                <h3 className="text-white text-3xl font-bold md:text-4xl">Por que a idxcode?</h3>
                <p className="text-white text-lg md:text-lg">Nosso trabalho é orientado por entregar <font className="text-idx-green font-bold">resultados reais e mensuráveis</font> para nossos clientes.</p>
                <p className="text-3xl font-bold text-idx-green md:text-2xl">Aqui não tem achismo!</p>
                <p className="text-white text-lg md:text-lg"><strong>Todas as estratégias são testadas</strong>, com riscos controlados, para que nossos clientes tenham o <strong>máximo de resultados</strong> com o <strong>investimento adequado</strong>.</p>
                <p className="text-white text-lg md:text-lg">Ao longo dos últimos cinco anos trabalhando com <font className="text-idx-green font-bold">Gestão de Tráfego Pago</font> para negócios locais, somamos mais de <font className="text-idx-green font-bold">R$ 3,2 Milhões</font> em anúncios gerenciados nas principais plataformas de compra de mídia do mercado (Google Ads, Facebook Ads, Pinterest Ads, Linkedin Ads e outros canais de tráfego).</p>
                <div className="flex flex-row gap-10 md:gap-24" >
                    <div className="border-l-4 border-idx-green pl-3 py-1 flex flex-col gap-1 text-left">
                        <h3 className="font-bold text-idx-green text-2xl md:text-4xl">R$3,2MM+</h3>
                        <p className="text-white md:text-lg">Investidos</p>
                    </div>
                    <div className="border-l-4 border-idx-green pl-3 py-1 flex flex-col gap-1 text-left">
                        <h3 className="font-bold text-idx-green text-2xl md:text-4xl">R$17MM+</h3>
                        <p className="text-white md:text-lg">Resultados</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 px-5 py-8 md:justify-center md:items-center md:mx-auto md:w-8/12 md:gap-12 md:py-16 md:px-20 md:text-center">
                <h3 className="text-white text-3xl font-bold md:text-5xl">
                    Quer fazer parte dos <font className="text-idx-green">10%</font> e escalar a sua empresa <font className="text-idx-green">através da internet</font>?
                </h3>
                <p className="text-white text-lg md:text-2xl">
                    <strong>
                        Preencha o <font className="text-idx-green font-bold">formulário abaixo</font>
                    </strong> com informações básicas sobre você e sua empresa e retornaremos com uma proposta adequada ao seu momento.
                </p>
                <p className="text-white text-lg font-bold md:text-2xl">Estamos prontos para fazer a sua empresa crescer!</p>
                <Formulario />
            </div>
        </div>
        <div className="bg-black pt-16 text-center ">
                <div className="my-8">
                    <Image
                        src="/assets/images/logoWhite.png"
                        alt="Logo idxcode"
                        width={150}
                        height={30}
                    />
                </div>
                <div className="mt-10 mx-8 pb-8 text-white text-sm ">
                    © Copyright 2022 - <strong>Idxcode</strong>
                </div>
            </div>
    </>
  )
}
