import styles from './card.module.css';
import Image from 'next/image'

const Card = (props) => {
    return (
        <div className={`rounded-lg shadow-md ${styles.mainContainer}`}>
            <div className={`flex items-center justify-center rounded-lg ${styles.iconContainer}`}>
                <Image src={`/${props.image}.svg`}height={40} width={40}/>
            </div>
            <h2 className={styles.titleCard}>{props.title}</h2>
            <div className={`flex items-center  ${styles.bottomInfoContainer}`}>
                <Image src="/ic_hour.svg" height={15} width={15}/>
                <p className={`${styles.textCard}`}>{props.text}</p>
            </div>
        </div>
    )
}

export default Card;