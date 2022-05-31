import { useState } from 'react'
import styles from './contactForm.module.css'
export default function ContactForm() {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const [errors, setErrors] = useState({});

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (name.length <= 0) {
            tempErrors["name"] = true;
            isValid = false;
        }
        if (mail.length <= 0) {
            tempErrors["mail"] = true;
            isValid = false;
        }
        if (phone.length <= 0) {
            tempErrors["phone"] = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
            const res = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                    mail: mail,
                    name: name,
                    phone: phone,
                    message: message,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            const { error } = await res.json();
            if (error) {
                console.log(error);
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                return;
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
        }
        console.log(name, mail, phone, message);
    };
    return (

        <>
            <div className="text-center">
                <h2 className={styles.formTitle}>
                    Solicite um orçamento
                </h2>
                <p className="text">
                    Preencha corretamente os campos abaixo
                </p>
            </div>
            <div className=" w-full px-4 lg:px-20 pb-11 pt-10 mx-auto">
                <form className={styles.mainForm} onSubmit={handleSubmit} action="">
                    <label htmlFor="nome" className="font-semibold text-lg">Qual o seu nome?</label>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} name="nome" className="
                    form-input 
                    w-full 
                    py-3
                    mt-1.5
                    mb-6 
                    block 
                    rounded-sm 
                    border-2
                    border-gray-200 
                    focus:border-lime-400 
                    focus:ring 
                    focus:ring-lime-200 
                    focus:ring-opacity-50"
                        placeholder="Nome completo" required />

                    <label htmlFor="email" className="font-semibold text-lg">Qual o seu e-mail?</label>
                    <input type="text" value={mail} onChange={e => setMail(e.target.value)} name="email" className="
                    form-input 
                    w-full 
                    py-3
                    mt-1.5 
                    mb-6
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
                    <input type="text" value={phone} onChange={e => setPhone(e.target.value)} name="whats" className="
                    form-input 
                    py-3
                    mt-1.5
                    mb-6 
                    w-full 
                    block 
                    rounded-sm 
                    border-2
                    border-gray-200 
                    focus:border-lime-400 
                    focus:ring 
                    focus:ring-lime-200 
                    focus:ring-opacity-50"
                        placeholder="(xx) xxxxx-xxxx" required />

                    <label htmlFor="description" className="font-semibold text-lg">Conte-nos um pouco do seu projeto...</label>
                    <textarea name="description" value={message} onChange={e => setMessage(e.target.value)} rows="3" className="
                    form-textarea 
                    mt-1.5
                    mb-6
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
                        placeholder="Informe sobre o seu projeto e como imagina que podemos ajudá-lo" />

                    <p className="font-semibold text-lg">Como prefere que nossa equipe comercial fale com você?</p>
                    <div className="lg:flex justify-between">
                        <div className="mx-auto space-x-3">
                            <span>
                                <input type="radio" name="formaDeContato" className="mr-1.5 ring-[#00ff00]" value="Todos" />
                                <label htmlFor="formaDeContato" className="text">Todos</label>
                            </span>
                        </div>
                        <div className="mx-auto space-x-3">
                            <span>
                                <input type="radio" name="formaDeContato" className="mr-1.5 ring-[#00ff00]" value="Email" />
                                <label htmlFor="formaDeContato" className="text">E-mail</label>
                            </span>

                        </div>
                        <div className="mx-auto space-x-3">
                            <span>
                                <input type="radio" name="formaDeContato" className="mr-1.5 ring-[#00ff00]" value="WhatsApp" />
                                <label htmlFor="formaDeContato" className="text">WhatsApp</label>
                            </span>

                        </div>
                        <div className="mx-auto space-x-3">
                            <span>
                                <input type="radio" name="formaDeContato" className="mr-1.5 ring-[#00ff00]" value="Ligação Telefônica" />
                                <label htmlFor="formaDeContato" className="text">Ligação Telefônica</label>
                            </span>
                        </div>
                    </div>
                    <button type="submit" id="formSubmit" className={styles.button}>Solicitar orçamento</button>
                    <div className="text-left">
                        {showSuccessMessage && (
                            <p className="text-green-500 font-semibold text-sm my-2">
                                Obrigado! Sua mensagem foi enviada com sucesso!
                            </p>
                        )}
                        {showFailureMessage && (
                            <p className="text-red-500">
                                Algo deu errado! Por favor, tente novamente.
                            </p>
                        )}
                    </div>
                </form>
            </div>

        </>
    )
}