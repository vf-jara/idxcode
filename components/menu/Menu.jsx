import Link from 'next/link'
import BotaoOrcamento from '../botaoOrcamento/BotaoOrcamento'
import styles from './menu.module.css'

export default function Menu() {
    return (
        <>
            <div className="hidden md:flex items-center py-3  h-50px" >
                <ul className="p-0 flex space-x-12 last-of-type:mr-12 text-idx-black">
                    <li className="hover:text-black transition-all ease-in-out delay-25"><Link href="/"><a>Home</a></Link></li>
                    <li className="hover:text-black transition-all ease-in-out delay-25"><Link href="/"><a>O que Fazemos</a></Link></li>
                    <li className="hover:text-black transition-all ease-in-out delay-25"><Link href="/"><a>Quem Somos</a></Link></li>
                </ul>
                <BotaoOrcamento texto="Solicite um Orçamento" url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>
            </div>

        </>
    )
}