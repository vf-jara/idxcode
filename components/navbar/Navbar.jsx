import styles from './navbar.module.css'
import Image from 'next/image'
import logo from '/public/assets/images/logoBlack.png'
import Link from 'next/link'
import BotaoOrcamento from '../botaoOrcamento/BotaoOrcamento'
import { useState } from 'react'



export default function Navbar() {
    const Links = [
        { name: "Home", link: "/" },
        { name: "O que Fazemos", link: "#services" },
        { name: "Projetos", link: "#projects" },
    ]
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="bg-white fixed top-0 left-0 z-50 w-full">
                <div className="container mx-auto">
                    <nav className="lg:flex bg-white justify-between py-3">
                        <div className="bg-white">
                            <div className={`${styles.logoContainer} lg:pt-2`}>
                                <Link href="/">
                                    <a>
                                        <Image
                                            src={logo}
                                            alt="Logo Idxcode"
                                            width="150px"
                                            height="30px"
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-8 cursor-pointer lg:hidden">
                                <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                            </div>

                            <ul className={`lg:pl-3 pl-5 py-2 space-y-5 lg:space-y-0  lg:flex items-center lg:space-x-12 transition-all duration-500 ease-in absolute lg:static left-0 bg-white w-full lg:w-auto lg:z-auto z-[-1]  ${open ? 'top-20' : 'top-[-490px]'}`}>
                                {
                                    Links.map((link) => (
                                        <li key={link.name} className="pl-3 text-idx-black hover:text-black transition-all ease-in-out delay-25"><Link href={link.link}><a>{link.name}</a></Link></li>
                                    ))
                                }
                                <div>
                                    <BotaoOrcamento texto="Solicite um Orçamento" url="#contact" />
                                </div>
                            </ul>

                        </div>
                    </nav>
                </div>
            </div>

        </>
    )
}