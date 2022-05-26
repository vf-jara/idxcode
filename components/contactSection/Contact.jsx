import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <>
            <div id="contact" className="w-full pt-10 lg:pt-24 lg:pb-24">
                <div className="container lg:flex mx-auto">
                    <div className="w-full lg:w-5/12">
                        <div className="title pt-10 mb-14">
                            <h2>
                                Deixe a tecnologia escalar o seu negócio
                            </h2>
                        </div>
                        <div className="text">
                            <p>Preencha o formulário e nossa equipe entrará em contato com você para agendar uma conversa o quanto antes.<br /><br /></p>

                            <p>Rua Major Capilé, 1422 - Sala 07 - MyJob Coworking, Jardim Central, Dourados / MS, Brasil<br /><br /> contato@idxcode.com.br<br /><br /> +55 (67) 9 9838-2687<br /><br /> Instagram @idx.code</p>
                        </div>
                    </div>
                    <div className="lg:w-7/12 py-8 lg:py-0 px-3">
                        <div className="w-full form-container pt-12 shadow-[0px_5px_83px_#2828281C] rounded">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}