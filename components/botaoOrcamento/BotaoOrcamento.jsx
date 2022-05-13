import styles from './botaoOrcamento.module.css'

export default function BotaoOrcamento(props) {
    return (
        <a href={props.url} target="_blank" ><button name="Solicite um Orçamento" className={styles.button}>
            <span className={styles.text}>
                {props.texto}
            </span>
        </button></a>
    )
}