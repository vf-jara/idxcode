import placeholder from '../../public/assets/images/ph.png'
import SliderHome from '../slider/Slider'
import BotaoOrcamento from '../botaoOrcamento/BotaoOrcamento'

export default function Projects() {
    return (
        <>
            <div className="w-full flex my-36">
                <div className="w-1/2">
                    <SliderHome />
                </div>
                <div className="w-1/2 pl-24 pr-5 py-10">
                    <div>
                        <h2 className="title">Alguns projetos que<br /> já concluímos para<br /> nossos clientes</h2>
                    </div>
                    <div className="my-10">
                        <p className="text">Dos mais simples websites às mais complexas<br /> integrações com Inteligência Artificial.</p>
                    </div>
                    <div>
                        <BotaoOrcamento texto="Solicite um Orçamento" url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                    </div>
                </div>
            </div>
            <div className="w-full mx-auto  bg-idx-bg-black">
                <div className="container mx-auto md:flex py-24">
                    <div className="w-1/2">
                        <h1 className="title text-white">Transformamos tecnologia em ativos digitais</h1>
                    </div>
                    <div className="w-1/2 pl-24 flex flex-col align-center justify-center">
                        <div className="mb-5">
                            <p className="textWhite">Todo o potencial da tecnologia atrelada ao seu<br/> negócio para fazer você vender mais.</p>
                        </div>
                        <div>
                            <BotaoOrcamento texto="Solicite um Orçamento" url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}