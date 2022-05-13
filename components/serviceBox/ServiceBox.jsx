import Image from 'next/image';
import styles from './serviceBox.module.css';

export default function ServiceBox(props) {

    return (
        <>
            <div className="flex w-[515px] h-[150px] bg-white hover:bg-idx-green transition-all ease-in-out duration-300">
                <div className="flex-col m-0 p-0 flex w-3/12 items-center justify-center">
                    <div className="h-[80px] w-[80px] flex items-center justify-center bg-idx-cinza hover:bg-idx-green transition-all ease-in-out duration-300 p-4 rounded-full">
                        <Image
                            src={props.icon}
                            alt="ícone"
                        />
                    </div>
                </div>
                <div className="flex-col py-6 w-9/12">
                    <div className={styles.title}>
                        <h3>{props.title}</h3>
                    </div>
                    <div className={styles.text}>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}