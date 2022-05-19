import ServiceBox from '../serviceBox/ServiceBox';
import icon1 from '/public/assets/images/icon1.png';
import icon2 from '/public/assets/images/icon2.png';
import icon3 from '/public/assets/images/icon3.png';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import BotaoOrcamento from '../botaoOrcamento/BotaoOrcamento';

export default function Services() {
    return (
        <>
            <div className="lg:my-16">
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
                        <div className="lg:flex w-full lg:gap-x-3 mb-6 lg:mb-12">
                            <div className="lg:flex-col w-full lg:w-6/12">
                                <div className="flex mb-5">
                                    <BsFillCheckCircleFill className="text-[#00ff00] mr-1 text-[25px]" />
                                    <p  className="text-lg font-medium">Sites Modernos e Mobile First</p>
                                </div>
                                <div className="flex mb-5">
                                    <BsFillCheckCircleFill className="text-[#00ff00] mr-1 text-[25px]" />
                                    <p  className="text-lg font-medium">Gestão de Tráfego</p>
                                </div>
                            </div>
                            <div className="lg:flex-col w-full lg:w-6/12">
                                <div className="flex mb-5">
                                    <BsFillCheckCircleFill className="text-[#00ff00] mr-1 text-[25px]" />
                                    <p className="text-lg font-medium">Integrações entre sistemas</p>
                                </div>
                                <div className="flex mb-5">
                                    <BsFillCheckCircleFill className="text-[#00ff00] mr-1 text-[25px] justify-center align-middle my-auto" />
                                    <p className="text-lg font-medium">Chatbots e Automações</p>
                                </div>
                            </div>
                        </div>
                        <div className="justify-center lg:block">
                            <BotaoOrcamento texto="Solicite um Orçamento" url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />

                        </div>
                    </div>
                    <div className="w-full pt-20 lg:pt-0 lg:w-7/12">
                        <div>
                            <ServiceBox icon={icon1} title="Desenvolvimento de Sites" text="Ninguém constrói casa em terreno alugado. Tenha o controle do seu público e das suas informações." />
                        </div>
                        <div className="lg:pl-20 my-8">
                            <ServiceBox icon={icon2} title="Gestão de Tráfego" text="Apareça para a pessoa certa, no momento certo , com o anúncio certo e escale as suas vendas." />
                        </div>
                        <div className="lg:pl-40">
                            <ServiceBox icon={icon3} title="Chatbots para WhatsApp" text="Muito volume de atendimento? Automatize as principais dúvidas e deixe o seu atendimento com o que realmente importa." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}