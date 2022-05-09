import styles from './hero.module.css';
import Image from 'next/image'
import imagem from '../../public/assets/images/computador.png'
import BotaoOrcamento from '../botaoOrcamento/BotaoOrcamento';
export default function Hero() {
    return (
        <>
            <div className="w-full bg-white">
                <div className="container mx-auto px-5 flex">
                    <div className="mb-10 flex-col w-1/2">
                        <h1 className={styles.title}>Soluções em<br /> tecnologia para a <br />sua empresa crescer</h1>
                    </div>
                    <div className="mb-10 flex-col w-1/2">

                    </div>

                </div>
            </div>
            <div className="w-full bg-idx-bg-black">
                <div className="container mx-auto px-5 flex">
                    <div className="mb-10 flex-col w-1/2">
                        <div className={`${styles.text} . mt-6 mb-12 w-3/4`}>
                            <p>Cuidamos de toda tecnologia necessária para a sua empresa crescer no ambiente digital enquanto você se concentra em cuidar do seu negócio!</p>
                        </div>
                        <div className="space-x-7">
                            <BotaoOrcamento texto="Solicite um Orçamento" />
                            <BotaoOrcamento texto="O que fazemos" />

                        </div>
                    </div>
                    <div className="mb-10 flex-col w-1/2">

                    </div>

                </div>
            </div>
        </>
    )
}