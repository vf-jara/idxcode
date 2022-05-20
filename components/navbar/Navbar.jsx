import styles from './navbar.module.css'
import Image from 'next/image'
import logo from '/public/assets/images/logoBlack.png'
import Link from 'next/link'
import BotaoOrcamento from '../botaoOrcamento/BotaoOrcamento'


export default function Navbar() {
    return (
        <>
            <div className="bg-white z-50 w-full">
                <div className="container mx-auto">
                    <nav className="flex justify-between my-5">
                        <div>
                            <div className={styles.logoContainer}>
                                <Image
                                    src={logo}
                                    alt="Logo Idxcode"
                                    width="150px"
                                    height="30px"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="hidden md:flex items-center py-3  h-50px" >
                                <ul className="p-0 flex space-x-12 last-of-type:mr-12 text-idx-black">
                                    <li className="hover:text-black transition-all ease-in-out delay-25"><Link href="/"><a>Home</a></Link></li>
                                    <li className="hover:text-black transition-all ease-in-out delay-25"><Link href="#services"><a>O que Fazemos</a></Link></li>
                                    <li className="hover:text-black transition-all ease-in-out delay-25"><Link href="#projects"><a>Projetos</a></Link></li>
                                </ul>
                                <BotaoOrcamento texto="Solicite um Orçamento" url="#contact" />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </>
    )
}