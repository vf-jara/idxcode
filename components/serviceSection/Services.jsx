import ServiceBox from '../serviceBox/ServiceBox';
import icon1 from '/public/assets/images/icon1.png';
import icon2 from '/public/assets/images/icon2.png';
import icon3 from '/public/assets/images/icon3.png';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import BotaoOrcamento from '../botaoOrcamento/BotaoOrcamento';
import { useRef } from 'react';
import { motion } from 'framer-motion'


export default function Services() {
    const services = useRef(null)
    const cards = useRef(null)


    return (
        <>
            <div className="lg:py-16 bg-green2" id="services">
                <div className="container mx-auto md:flex pt-20">
                    <div className="sm:w-full lg:w-5/12">
                        <div className="title">
                            <h2>O que fazemos?</h2>
                        </div>
                        <div className="text py-10 lg:w-10/12">
                            <p>
                                Transformamos tecnologia em ativos digitais para a sua empresa crescer com consistência e aproveitar todo o potencial do marketing digital sem se preocupar com uma equipe técnica internamente.
                            </p>
                        </div>
                        <div ref={services} className="lg:flex w-full lg:gap-x-3 mb-6 lg:mb-12">
                            <div className="lg:flex-col w-full lg:w-6/12">
                                <motion.div
                                    initial={{ opacity: 0, x: "+100%" }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}

                                    className={`flex mb-5`}>
                                    <BsFillCheckCircleFill className="text-[#00ff00] mr-1 text-[25px]" />
                                    <p className="text-lg font-medium">Sites modernos e Mobile First</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: "+100%" }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.2 }}
                                    viewport={{ once: true }}

                                    className={`flex mb-5`}>
                                    <BsFillCheckCircleFill className="text-[#00ff00] mr-1 text-[25px]" />
                                    <p className="text-lg font-medium">Gestão de Tráfego</p>
                                </motion.div>
                            </div>
                            <div className="lg:flex-col w-full lg:w-6/12">
                                <motion.div
                                    initial={{ opacity: 0, x: "+100%" }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.3 }}
                                    viewport={{ once: true }}

                                    className={`flex mb-5`}>
                                    <BsFillCheckCircleFill className="text-[#00ff00] mr-1 text-[25px]" />
                                    <p className="text-lg font-medium">Integrações entre sistemas</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: "+100%" }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.4 }}
                                    viewport={{ once: true }}

                                    className={`flex mb-5`}>
                                    <BsFillCheckCircleFill className="text-[#00ff00] mr-1 text-[25px] justify-center align-middle my-auto" />
                                    <p className="text-lg font-medium">Chatbots e Automações</p>
                                </motion.div>
                            </div>
                        </div>
                        <div className={`justify-center lg:block`}>
                            <BotaoOrcamento texto="Solicite um orçamento" url="#contact" />

                        </div>
                    </div>
                    <div ref={cards} className="w-full pt-20 lg:pt-0 lg:w-7/12">
                        <motion.div
                            initial={{ opacity: 0, x: "+100%" }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0 }}
                            viewport={{ once: true, margin:"00px" }}

                            className={``}>
                            <ServiceBox icon={icon1} title="Desenvolvimento de Sites" text="Ninguém constrói casa em terreno alugado. Tenha o controle do seu público e das suas informações." />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: "+100%" }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            viewport={{ once: true }}

                            className={`lg:pl-20 my-8 `}>
                            <ServiceBox icon={icon2} title="Gestão de Tráfego" text="Apareça para a pessoa certa, no momento certo, com o anúncio certo e escale as suas vendas." />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: "+100%" }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            viewport={{ once: true }}

                            className={`lg:pl-40 `}>
                            <ServiceBox icon={icon3} title="Chatbots para WhatsApp" text="Muito volume de atendimento? Automatize as principais dúvidas e deixe o seu atendimento com o que realmente importa." />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )

}