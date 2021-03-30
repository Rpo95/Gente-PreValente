import styles from './document.module.css';
import Image from 'next/image'


const Document = (props) => {
    return (
        <div className={` ${styles.mainContainer}`}>
            <div className={`justify-end ${props.shouldShowX ? 'flex' : 'hidden'} `}>
                <div onClick={props.onIconClick} className={`${styles.iconContainer}`}>
                    <Image src="/ic_esc.svg" height={15} width={15}/>
                </div>
            </div>
            <h2 className={`flex justify-center ${styles.titleContainer}`}>Documentos cargados</h2>
            <div className={`flex flex-col items-center  ${styles.documentContainer}`}>
                <a href="/dummy.pdf" download="pdf prueba" className={`flex items-center rounded-lg shadow-md  ${styles.textContainer}`}>
                    <h2 className={`${styles.documentStyle}`}>RUT PrevalentWare</h2>
                    <Image src="/ic_pdf.svg" height={30} width={30}/>
                </a>
                <a href="/dummy.pdf" download="pdf prueba" className={`flex items-center rounded-lg shadow-md ${styles.textContainer}`}>
                    <h2 className={`${styles.documentStyle}`}>Logo PrevalentWare</h2>
                    <Image src="/ic_pdf.svg" height={30} width={30}/>
                </a>
                <a href="/dummy.pdf" download="pdf prueba" className={`flex items-center rounded-lg shadow-md ${styles.textContainer}`}>
                    <h2 className={`${styles.documentStyle}`}>Acta de constitución PrevalentWare</h2>
                    <Image src="/ic_pdf.svg" height={30} width={30}/>
                </a>
                <a href="/dummy.pdf" download="pdf prueba" className={`flex items-center rounded-lg shadow-md ${styles.textContainer}`}>
                    <h2 className={`${styles.documentStyle}`}>Cámara de comercio PrevalentWare</h2>
                    <Image src="/ic_pdf.svg" height={30} width={30}/>
                </a>
                <a href="/dummy.pdf" download="pdf prueba" className={`flex items-center rounded-lg shadow-md ${styles.textContainer}`}>
                    <h2 className={`${styles.documentStyle}`}>Otro Documento PrevalentWare</h2>
                    <Image src="/ic_pdf.svg" height={30} width={30}/>
                </a>
            </div>
        </div>
    )
}

export default Document