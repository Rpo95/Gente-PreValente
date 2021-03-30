import Image from "next/image"
import Link from "next/link"
import Header from "../components/header/header"
import Button from '../components/button/button'
import { TYPE_ERROR, TYPE_FILE, TYPE_SUCCESS } from "../utils/buttonTypes"
import styles from '../styles/company-approval.module.css'
import Input from '../components/input/input'
import Modal from 'react-modal'
import { useState } from "react"
import Document from '../components/document/document'

Modal.setAppElement('#__next')

const CompanyApproval = () => {
    const [modalStatus, setModalStatus] = useState (false)

    return (
        <div className={`${styles.container}`}>
            <Modal isOpen={modalStatus} onRequestClose={() => setModalStatus(false)}>
                <Document onIconClick={() => setModalStatus(false)}/>
            </Modal>
            <Header/>
            <div className={`flex ${styles.titleContainer}`}>
                <Link href="/"><a className={styles.titleLink}>Administración</a></Link>
                <p>&nbsp;/ Aprobación de empresas</p>
            </div>
            <div className={`xl:hidden 2xl:hidden justify-center flex ${styles.footerContainer}`}>
                <Image src="/ic_left.svg" height={30} width={30}/>
                 <h2 className={styles.footerTitle}>Empresa 1 de 2 pendientes por aprobación</h2>
                 <Image className={styles.right} src="/ic_right.svg" height={30} width={30}/>
            </div>
            <div className={`${styles.parentContainer}`}>
                <form className={`grid grid-cols-8 gap-6 rounded-lg shadow-md  ${styles.formContainer}`}>
                    <div className={`xl:col-start-4 col-start-5 ${styles.paddingButton}`}>
                        <Image src="/ic_logo.svg" height={200} width={200}/>
                    </div>
                    <div className={`hidden flex-col xl:flex items-center col-span-2`}>
                        <Button style={styles.buttonApproval} type={TYPE_SUCCESS} title={"Aprobar Empresa"}/>
                        <Button style={styles.buttonReject}  type={TYPE_ERROR} title={"Rechazar Empresa"}/>
                    </div>
                    <div className={`xl:col-start-3 col-start-2 xl:col-span-2 col-span-6`}>
                        <Input titleInput={'Nombre de la Empresa'} value={'PREVALENTWARE'} />
                    </div>
                    <div className={`xl:col-start-5 col-start-2 xl:col-span-2 col-span-6`}>
                        <Input titleInput={'Razón Social'} value={'PREVALENTWARE S.A.S'}/>
                    </div>
                    <div className={`xl:col-start-3 col-start-2 xl:col-span-2 col-span-6`}>
                        <Input titleInput={'Tipo de identificación'} value={'NIT'}/>
                    </div>
                    <div className={`xl:col-start-5 col-start-2 xl:col-span-2 col-span-6`}>
                        <Input titleInput={'Identificación'} value={'901375150-4'}/>
                    </div>
                    <div className={`xl:col-start-3 col-start-2 xl:col-span-2 col-span-6`}>
                        <Input titleInput={'# de empleados'} value={'1-10'}/>
                    </div>
                    <div className={`xl:inline 2xl:inline hidden col-start-5 col-span-2`}>
                        <Button onClick={() => setModalStatus(true)} type={TYPE_FILE} title={"Ver archivos adjuntos"}/>
                    </div>
                </form>
            </div>
            <div className={`xl:flex 2xl:flex justify-center hidden ${styles.footerContainer}`}>
                <Image src="/ic_left.svg" height={30} width={30}/>
                 <h2 className={styles.footerTitle}>Empresa 1 de 2 pendientes por aprobación</h2>
                 <Image className={styles.right} src="/ic_right.svg" height={30} width={30}/>
            </div>
            <div className={`xl:hidden 2xl:hidden justify-center flex`}>
                <Document shouldShowX={false} />
            </div>
            <div className={`flex-col xl:hidden 2xl:hidden flex mt-8  items-center`}>
                <Button style={styles.buttonApproval} type={TYPE_SUCCESS} title={"Aprobar Empresa"}/>
                <Button style={styles.buttonReject}  type={TYPE_ERROR} title={"Rechazar Empresa"}/>
            </div>
            
        </div>
    ) 
}

export default CompanyApproval;