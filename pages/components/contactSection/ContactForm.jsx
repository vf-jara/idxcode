import styles from './contactForm.module.css'
export default function ContactForm() {
    return (
        <>
            <div className="text-center">
                <h2 className="formTitle">
                    Solicite um Orçamento
                </h2>
                <p className="text">
                    Preencha corretamente os campos abaixo
                </p>
            </div>
            <div className=" w-full px-20 pb-11 pt-10 mx-auto">
                <form className={styles.mainForm} action="">
                    <label htmlFor="nome" className="font-semibold text-lg">Qual seu nome?</label>
                    <input type='text' name="nome" className="
                    form-input 
                    w-full 
                    py-3
                    mt-1.5
                    mb-8 
                    block 
                    rounded-sm 
                    border-2
                    border-gray-200 
                    focus:border-lime-400 
                    focus:ring 
                    focus:ring-lime-200 
                    focus:ring-opacity-50"
                        placeholder="Nome Completo" required />

                    <label htmlFor="email" className="font-semibold text-lg">Qual o seu E-mail?</label>
                    <input type="text" name="email" className="
                    form-input 
                    w-full 
                    py-3
                    mt-1.5 
                    mb-8
                    block 
                    rounded-sm 
                    border-2
                    border-gray-200 
                    focus:border-lime-400 
                    focus:ring 
                    focus:ring-lime-200 
                    focus:ring-opacity-50"
                        placeholder="Seu melhor e-mail" required />

                    <label htmlFor="whats" className="font-semibold text-lg">Qual o seu WhatsApp?</label>
                    <input type="text" name="whats" className="
                    form-input 
                    py-3
                    mt-1.5
                    mb-8 
                    w-full 
                    block 
                    rounded-sm 
                    border-2
                    border-gray-200 
                    focus:border-lime-400 
                    focus:ring 
                    focus:ring-lime-200 
                    focus:ring-opacity-50"
                        placeholder="(xx) xxxx-xxxx" required />

                    <label htmlFor="description" className="font-semibold text-lg">Conte-nos um pouco do seu projeto...</label>
                    <textarea name="description" rows="3" className="
                    form-textarea 
                    mt-1.5
                    mb-8
                    py-3
                    w-full 
                    block 
                    rounded-sm 
                    border-2
                    border-gray-200 
                    focus:border-lime-400 
                    focus:ring 
                    focus:ring-lime-200 
                    focus:ring-opacity-50"
                        placeholder="Informe sobre o seu projeto e como imagina que podemos ajuda-lo" />

                    <p className="font-semibold text-lg">Como prefere que nossa equipe comercial fale com você?</p>
                    <div className="flex justify-between">
                        <span>
                            <input type="radio" name="formaDeContato" className="mr-1.5 ring-[#00ff00]" value="Todos" />
                            <label htmlFor="formaDeContato" className="text">Todos</label>
                        </span>
                        <span>
                            <input type="radio" name="formaDeContato" className="mr-1.5 ring-[#00ff00]" value="Email" />
                            <label htmlFor="formaDeContato" className="text">E-mail</label>
                        </span>
                        <span>
                            <input type="radio" name="formaDeContato" className="mr-1.5 ring-[#00ff00]" value="WhatsApp" />
                            <label htmlFor="formaDeContato" className="text">WhatsApp</label>
                        </span>
                        <span>
                            <input type="radio" name="formaDeContato" className="mr-1.5 ring-[#00ff00]" value="Ligação Telefônica" />
                            <label htmlFor="formaDeContato" className="text">Ligação Telefônica</label>
                        </span>
                    </div>
                    <button type="submit" className={styles.button}>Solicitar Orçamento</button>
                </form>
            </div>

        </>
    )
}