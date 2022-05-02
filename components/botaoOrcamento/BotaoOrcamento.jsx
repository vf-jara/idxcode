import styles from './botaoOrcamento.module.css'

export default function BotaoOrcamento(props) {
    return (
        <a href="#"><button name= "Solicite um Orçamento" className={styles.button}>
            <span className={styles.text}>{props.texto}</span>
        </button></a>
    )
}