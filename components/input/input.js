import styles from '../input/input.module.css'

const Input = (props) => {
    return (
        <div className={`${styles.group}`}>      
            <input className={`${styles.input}`} type="text" value={props.value}/>
            <span className={`${styles.highlight}`}></span>
            <span className={`${styles.bar}`}></span>
            <label className={`${styles.label}`}>{props.titleInput}</label>
        </div>
    )
}

export default Input; 