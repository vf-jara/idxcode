import Image from "next/image";

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
                        <li className="mx-4">Home</li>
                        <li className="mx-4">O que Fazemos</li>
                        <li className="mx-4">Quem Somos</li>
                        <li className="mx-4">Orçamento</li>
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