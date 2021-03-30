import styles from './button.module.css';
import Image from 'next/image'
import { TYPE_ERROR, TYPE_SUCCESS } from '../../utils/buttonTypes';

const  Button = (props) => {

    const getImageByType = (type) => {
        if (type == TYPE_SUCCESS) {
            return '/ic_yes.svg'
        } else if (type == TYPE_ERROR) {
            return '/ic_no.svg'
        } else {
            return '/ic_attached.svg'
        }
    }

    return (
        <div onClick={props.onClick} className={`flex items-center rounded-lg shadow-md ${styles.buttonContainer} ${props.style}`}>
            <Image src={getImageByType(props.type)} height={30} width={30}/>
            <h2 className={styles.title}>{props.title}</h2>
        </div>
    )
}

export default Button;