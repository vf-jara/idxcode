import ServiceBox from '../serviceBox/ServiceBox';
import icon1 from '/public/assets/images/icon1.png';
import icon2 from '/public/assets/images/icon2.png';
import icon3 from '/public/assets/images/icon3.png';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import BotaoOrcamento from '../botaoOrcamento/BotaoOrcamento';
import { useInView } from 'react-intersection-observer';


export default function Services() {
    const { ref, inView, entry } = useInView({
        root:null,
        threshold: 0,
        triggerOnce: true
    })
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
                        <div ref={ref} className="lg:flex w-full lg:gap-x-3 mb-6 lg:mb-12">
                            <div className="lg:flex-col w-full lg:w-6/12">
                                <div className={`flex mb-5 ${inView? "fadeBlur" : "opacity-0"}`}>
                                    <BsFillCheckCircleFill className="text-[#00ff00] mr-1 text-[25px]" />
                                    <p className="text-lg font-medium">Sites modernos e Mobile First</p>
                                </div>
                                <div className={`flex mb-5 ${inView? "fadeBlur delay-1" : "opacity-0"}`}>
                                    <BsFillCheckCircleFill className="text-[#00ff00] mr-1 text-[25px]" />
                                    <p className="text-lg font-medium">Gestão de Tráfego</p>
                                </div>
                            </div>
                            <div className="lg:flex-col w-full lg:w-6/12">
                                <div className={`flex mb-5 ${inView? "fadeBlur delay-2" : "opacity-0"}`}>
                                    <BsFillCheckCircleFill className="text-[#00ff00] mr-1 text-[25px]" />
                                    <p className="text-lg font-medium">Integrações entre sistemas</p>
                                </div>
                                <div className={`flex mb-5 ${inView? "fadeBlur delay-3" : "opacity-0"}`}>
                                    <BsFillCheckCircleFill className="text-[#00ff00] mr-1 text-[25px] justify-center align-middle my-auto" />
                                    <p className="text-lg font-medium">Chatbots e Automações</p>
                                </div>
                            </div>
                        </div>
                        <div ref={ref} className={`justify-center lg:block ${inView? "slideLeft delay-4" : "opacity-0"}`}>
                            <BotaoOrcamento texto="Solicite um orçamento" url="#contact" />

                        </div>
                    </div>
                    <div className="w-full pt-20 lg:pt-0 lg:w-7/12">
                        <div ref={ref} className={`${inView? "slideRight":"opacity-0"}`}>
                            <ServiceBox icon={icon1} title="Desenvolvimento de Sites" text="Ninguém constrói casa em terreno alugado. Tenha o controle do seu público e das suas informações." />
                        </div>
                        <div ref={ref} className={`lg:pl-20 my-8 ${inView? "slideRight delay-1":"opacity-0"}`}>
                            <ServiceBox icon={icon2} title="Gestão de Tráfego" text="Apareça para a pessoa certa, no momento certo, com o anúncio certo e escale as suas vendas." />
                        </div>
                        <div ref={ref} className={`lg:pl-40 ${inView? "slideRight delay-2":"opacity-0"}`}>
                            <ServiceBox icon={icon3} title="Chatbots para WhatsApp" text="Muito volume de atendimento? Automatize as principais dúvidas e deixe o seu atendimento com o que realmente importa." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}