import Image from 'next/image'
import styles from './logo.module.css'
import logo from '/public/assets/images/logoBlack.png'


export default function Logo() {
    return (
        <>
            <div className={styles.logoContainer}>
                <Image
                    src={logo}
                    alt="Logo Idxcode"
                    width="150px"
                    height="30px"
                />

            </div>
        </>

    )
}