import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="bg-idx-bg-black pt-16 text-center ">
                <div className="ml-8">
                    <Image
                        src="/assets/images/logoWhite.png"
                        width={300}
                        height={60}
                    />
                </div>
                <div className="mt-10 mb-8">
                    <ul className="text-white justify-center md:flex">
                        <li className="mx-4">
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className="mx-4">
                            <Link href="#services">
                                <a>O que Fazemos</a>
                            </Link>
                        </li>
                        <li className="mx-4">
                            <Link href="#projects">
                                <a>Projetos</a>
                            </Link>
                        </li>
                        <li className="mx-4">
                            <Link href="#contact">
                                <a>Orçamento</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <a src="/" className="mx-4"><Image src="/assets/images/mail.svg" width={24} height={24} /></a>
                    <a src="/" className="mx-4"><Image src="/assets/images/location.svg" width={24} height={24} /></a>
                    <a src="/" className="mx-4"><Image src="/assets/images/phone.svg" width={24} height={24} /></a>
                </div>
                <div className="mt-10 mx-8 pb-8 text-white text-sm ">
                    © Copyright 2022 - idxcode
                </div>
            </div>

        </>

    )
}