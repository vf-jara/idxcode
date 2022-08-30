import SliderHome from '../slider/Slider'
import BotaoOrcamento from '../botaoOrcamento/BotaoOrcamento'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function Projects() {
    const slide = useRef(null)
    const title = useRef(null)
    const faixa = useRef(null)

    return (
        <>
            <div id="projects" className="w-full lg:flex lg:flex-row-reverse py-12 lg:pt-36">

                <div ref={title} className="lg:w-1/2 mx-[24px] lg:pl-24 pr-5 py-10">
                    <motion.div
                        initial={{ opacity: 0, y: "+100%" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className={``}>
                            <h2 className="title">Alguns projetos que já concluímos para<br /> nossos clientes</h2>
                        </div>
                        <div className="my-10">
                            <p className={`text`}>Dos mais simples websites às mais complexas<br /> integrações com Inteligência Artificial.</p>
                        </div>

                        <div className={``}>
                            <BotaoOrcamento texto="Solicite um orçamento" url="#contact" />
                        </div>
                    </motion.div>
                </div>
                <div ref={slide} className="lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: "-100%" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <SliderHome />

                    </motion.div>
                </div>
            </div>
            <div className="w-full mx-auto bg-idx-bg-black">
                <div ref={faixa} className={`container mx-auto md:flex py-12 lg:py-24`}>
                    <motion.div className="lg:w-1/2"
                        initial={{ opacity: 0, x: "+100%" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >

                        <h1 className="title text-white">Transformamos tecnologia em ativos digitais</h1>
                    </motion.div>
                    <motion.div className="pt-6 lg:pt-0 lg:w-1/2 lg:pl-24 flex flex-col justify-center"
                        initial={{ opacity: 0, x: "+100%" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-5">
                            <p className="textWhite">Todo o potencial da tecnologia atrelada ao seu negócio para fazer você vender mais.</p>
                        </div>
                        <div>
                            <BotaoOrcamento texto="Solicite um orçamento" url="#contact" />
                        </div>

                    </motion.div>
                </div>

            </div>
        </>
    )
}