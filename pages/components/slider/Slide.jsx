import Image from 'next/image';
import styles from './slider.module.css';
export default function Slide(props) {
    return (
        <>
            <div className={styles.slide}>
                <Image
                    src={props.src}
                    alt="slide"
                    layout="fixed"
                    height={450}
                    width={450}
                />
            </div>
        </>
    )
}