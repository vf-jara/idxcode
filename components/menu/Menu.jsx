import styles from './menu.module.css'

export default function Menu() {
    return (
        <div className={styles.menuContainer}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">O que Fazemos</a></li>
                <li><a href="/">Quem Somos</a></li>
            </ul>
        </div>
    )
}