import Link from 'next/link'
import styles from './menu.module.css'

export default function Menu() {
    return (
        <>
            <div className={styles.menuContainer}>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/"><a>O que Fazemos</a></Link></li>
                    <li><Link href="/"><a>Quem Somos</a></Link></li>
                </ul>
            </div>

        </>
    )
}