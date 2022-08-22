import SliderHome from '../slider/Slider'
import BotaoOrcamento from '../botaoOrcamento/BotaoOrcamento'
import { useInView } from 'react-intersection-observer'

export default function Projects() {
    const { ref, inView, entry } = useInView({
        root:null,
        threshold: 1,
        triggerOnce: true,
    })
    return (
        <>
            <div id="projects" className="w-full lg:flex lg:flex-row-reverse py-12 lg:pt-36">

                <div className="lg:w-1/2 mx-[24px] lg:pl-24 pr-5 py-10">
                    <div ref={ref} className={`${inView? "slideRight" : "opacity-0"}`}>
                        <h2 className="title">Alguns projetos que já concluímos para<br /> nossos clientes</h2>
                    </div>
                    <div className="my-10">
                        <p ref={ref} className={`text ${inView? "slideRight delay-1" : "opacity-0"}`}>Dos mais simples websites às mais complexas<br /> integrações com Inteligência Artificial.</p>
                    </div>
                    <div className={`${inView? "slideRight delay-2" : "opacity-0"}`}>
                        <BotaoOrcamento texto="Solicite um orçamento" url="#contact" />
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <SliderHome />
                </div>
            </div>
            <div className="w-full mx-auto bg-idx-bg-black">
                <div className="container mx-auto md:flex py-12 lg:py-24">
                    <div className="lg:w-1/2">
                        <h1 className="title text-white">Transformamos tecnologia em ativos digitais</h1>
                    </div>
                    <div className="pt-6 lg:pt-0 lg:w-1/2 lg:pl-24 flex flex-col justify-center">
                        <div className="mb-5">
                            <p className="textWhite">Todo o potencial da tecnologia atrelada ao seu negócio para fazer você vender mais.</p>
                        </div>
                        <div>
                            <BotaoOrcamento texto="Solicite um orçamento" url="#contact" />
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}