import React, {useState} from 'react';
import { Input } from '@nextui-org/react';

export default function Formulario(props) {
    const [enviado, setEnviado] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);
    const [nome, setNome] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [email, setEmail] = useState("");
    const [whatsApp, setWhatsApp] = useState("");
    const [area, setArea] = useState("");
    const [faturamento, setFaturamento] = useState("");
    const [errors, setErrors] = useState({});

    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (nome.length <= 0) {
            tempErrors["nome"] = true;
            isValid = false;
        }
        if (empresa.length <= 0) {
            tempErrors["empresa"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (whatsApp.length <= 0) {
            tempErrors["whatsApp"] = true;
            isValid = false;
        }
        if (area.length <= 0) {
            tempErrors["area"] = true;
            isValid = false;
        }
        if (faturamento.length <= 0) {
            tempErrors["faturamento"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
            const res = await fetch("/api/lp-trafego", {
                body: JSON.stringify({
                    email: email,
                    nome: nome,
                    empresa: empresa,
                    whatsApp: whatsApp,
                    area: area,
                    faturamento: faturamento,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            const { error, status } = await res.json();
            if (error) {
                setEnviado(false);
                setShowFailureMessage(true);
                return;
            }
            if(status){
                setEnviado(true);
                setShowFailureMessage(false);
                return;
            }
        }else{
            setShowFailureMessage(true);
        }
    };
    return (
        <div>
            {showFailureMessage && (
                <div className="w-full h-14 mt-2 mb-28 px-4 py-3 text-red-500 text-xl transition-all md:h-20">
                    Ocorreu um erro ao enviar sua mensagem.<br/><br/>
                    Por favor, revise as informações abaixo e tente novamente.
                </div>
            )}
            {enviado ? (
                <div className="w-full h-14 mt-2 px-4 py-3 text-idx-green font-bold text-xl transition-all md:h-20">
                    Agradecemos seu contato.<br/><br/>
                    Nossa equipe lhe retornará em até 24h úteis por e-mail ou por WhatsApp.
                </div>
            ) : (
                <>
                    <form className="trafego-form px-1 py-0 flex flex-col gap-4">
                        <Input value={nome} onChange={(e) => setNome(e.target.value)} size="large" className="formInput" width="100%" status="success" color="success" bordered label="Qual o seu nome?" />
                        <Input value={empresa} onChange={(e) => setEmpresa(e.target.value)} size="large" className="formInput" width="100%" status="success" color="success" bordered label="Qual o nome da sua  empresa?" />
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} size="large" className="formInput" width="100%" status="success" color="success" bordered type="email" label="Qual o seu email?" />
                        <Input value={whatsApp} onChange={(e) => setWhatsApp(e.target.value)} size="large" className="formInput" width="100%" status="success" color="success" bordered type="tel" label="Qual o seu WhatsApp?" />
                        <div>
                            <label className="text-white px-1">Qual a área da sua empresa?</label>
                            <select value={area} onChange={(e) => setArea(e.target.value)} className="formInput w-full mt-1 h-[50px] bg-black text-white border-2 focus:border-idx-green border-white " width="100%">
                                <option>Selecione</option>
                                <option value="Saúde">Saúde</option>
                                <option value="E-commerce">E-commerce</option>
                                <option value="Educação">Educação</option>
                                <option value="Varejo">Varejo</option>
                                <option value="Indústria">Indústria</option>
                                <option value="SAAS">SAAS</option>
                                <option value="Outra">Outra</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-white px-1">Faturamento Mensal? (R$)</label>
                            <select value={faturamento} onChange={(e) => setFaturamento(e.target.value)} className="formInput w-full mt-1 h-[50px] bg-black text-white border-2 focus:border-idx-green border-white " width="100%">
                                <option>Selecione</option>
                                <option value="25k">até R$ 25.000,00 / mês</option>
                                <option value="50k">até R$ 50.000,00 / mês</option>
                                <option value="100k">até R$ 100.000,00 / mês</option>
                                <option value="200k">até R$ 200.000,00 / mês</option>
                                <option value="500k">até R$ 500.000,00 / mês</option>
                                <option value="1MM">até R$ 1.000.000,00 / mês</option>
                                <option value="+1MM">acima de R$ 1.000.000,00 / mês</option>
                            </select>
                        </div>
                    </form>
                    <button onClick={handleSubmit} className="w-full h-14 mt-8 px-4 py-3 bg-idx-green text-black hover:border-2 hover:border-idx-green hover:text-idx-green hover:bg-black font-bold text-xl transition-all md:text-2xl md:h-20">Quero vender mais!</button>
                </>
            ) }
        </div>
    )
}