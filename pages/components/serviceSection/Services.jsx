import ServiceBox from '../serviceBox/ServiceBox';
import icon1 from '/public/assets/images/icon1.png';
import icon2 from '/public/assets/images/icon2.png';
import icon3 from '/public/assets/images/icon3.png';
import BotaoOrcamento from '../botaoOrcamento/BotaoOrcamento';

export default function Services() {
    return (
        <>
            <div className="my-16">
                <div className="container mx-auto md:flex pt-20">
                    <div className="sm:w-full lg:w-1/2">
                        <div className="title">
                            <h2>O que fazemos?</h2>
                        </div>
                        <div className="text py-10 w-10/12">
                        <p>
                            Transformamos tecnologia em ativos digitais para a sua empresa crescer com consistência e aproveitar todo o potencial do marketing digital sem se preocupar com uma equipe técnica internamente.
                        </p>
                    </div>
                    <div className="flex w-full mb-12">
                        <div className="flex-col w-1/2 ">
                            <p className="text2"> Sites Modernos e Mobile First</p>
                            <p className="text2"> Integrações entre sistemas</p>
                        </div>
                        <div className="flex-col w-1/2">
                            <p className="text2"> Gestão de Tráfego</p>
                            <p className="text2"> Chatbots e Automações</p>
                        </div>
                    </div>
                    <BotaoOrcamento texto="Solicite um Orçamento" url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                </div>
                <div className=" md:w-full lg:w-1/2">
                    <div>
                        <ServiceBox icon={icon1} title="Desenvolvimento de Sites" text="Ninguém constrói casa em terreno alugado. Tenha o controle do seu público e das suas informações." />
                    </div>
                    <div className="lg:pl-20 md:pl-10 my-8">
                        <ServiceBox icon={icon2} title="Gestão de Tráfego" text="Apareça para a pessoa certa, no momento certo , com o anúncio certo e escale as suas vendas." />
                    </div>
                    <div className="lg:pl-40 md-pl-20">
                        <ServiceBox icon={icon3} title="Chatbots para WhatsApp" text="Muito volume de atendimento? Automatize as principais dúvidas e deixe o seu atendimento com o que realmente importa." />
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}