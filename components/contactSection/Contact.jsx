import ContactForm from "./ContactForm";
import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
    const texto = useRef(null)
    const form = useRef(null)
    return (
        <>
            <div id="contact" className="w-full pt-10 lg:pt-24 lg:pb-24">
                <div ref={texto} className="container lg:flex gap-4 mx-auto">
                    <div className="w-full lg:w-5/12">
                        <motion.div className="title pt-10 mb-14"
                            initial={{ opacity: 0, y: "+100%" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2>
                                Deixe a tecnologia escalar o seu negócio
                            </h2>
                        </motion.div>
                        <motion.div className="text"
                            initial={{ opacity: 0, y: "+100%" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <p>Preencha o formulário e nossa equipe entrará em contato com você para agendar uma conversa o quanto antes.<br /><br /></p>

                            <p>Rua Major Capilé, 1422 - Sala 07 - MyJob Coworking, Jardim Central, Dourados / MS, Brasil<br /><br /> contato@idxcode.com.br<br /><br /> +55 (67) 9 9838-2687<br /><br /> Instagram @idx.code</p>
                        </motion.div>
                    </div>
                    <div className="lg:w-7/12 py-8 lg:py-0 px-3">
                        <div
                            className="w-full form-container pt-12 shadow-[0px_5px_83px_#2828281C] rounded">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}