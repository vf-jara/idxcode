import React, { useRef } from 'react';
import Image from 'next/image';
import imagem from '/public/assets/images/computador.png';
import BotaoOrcamento from '../botaoOrcamento/BotaoOrcamento';
import { motion } from 'framer-motion';




export default function Hero() {

    const scrollRef = useRef(null)

    return (
        <>
            <div ref={scrollRef} className="h-full pt-10 lg:pt-20">
                <div className="w-full bg-white">
                    <div className="container mx-auto flex">
                        <motion.div
                            initial={{ opacity: 0, x: "+100%" }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true, root: scrollRef }}
                            className="mb-4 lg:flex-col w-full lg:w-1/2">

                            <h1 className={`titleHero `}>Soluções em<br /> tecnologia para a sua empresa crescer</h1>
                        </motion.div>
                        <div className="hidden lg:flex-col mb-5 w-1/2">
                        </div>
                    </div>
                </div>
                <div className="w-full bg-idx-bg-black">
                    <div className="container mx-auto flex">
                        <motion.div
                            initial={{ opacity: 0, x: "+100%" }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true, root: scrollRef }}
                            className={`pb-10 lg:flex-col w-full lg:w-1/2 `}>
                            <div className="textWhite mt-6 mb-12 w-full lg:w-3/4">
                                <p>Cuidamos de toda tecnologia necessária para a sua empresa crescer no ambiente digital enquanto você se concentra em cuidar do seu negócio!</p>
                            </div>
                            <div className="lg:space-x-7 lg:flex lg:pb-20">
                                <div className="mb-3">
                                    <BotaoOrcamento texto="Solicite um orçamento" url="#contact" />
                                </div>
                                <div>
                                    <BotaoOrcamento texto="O que fazemos" url="#services" />
                                </div>
                            </div>
                        </motion.div>
                        <div className="hidden lg:block mb-10 flex-col w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, x: "-100%" }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true, root: scrollRef }}
                                className={`absolute bottom-[70px] right-[-10vw] `}>
                                <Image src={imagem} alt='pessoas trabalhando no computador' width='692' height='478' />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}