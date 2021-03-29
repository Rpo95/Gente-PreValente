import Image from "next/image"
import Link from "next/link"
import Header from "../components/header/header"
import Button from '../components/button/button'
import { TYPE_ERROR, TYPE_FILE, TYPE_SUCCESS } from "../utils/buttonTypes"
import styles from '../styles/company-approval.module.css'
import Input from '../components/input/input'

const CompanyApproval = () => {
    return (
        <div>
            <Header/>
            <div>
                <Link href="/"><a>Administracion</a></Link>
                <p>/Aprobación de empresas</p>
            </div>
            <form className={`grid grid-cols-8 gap-6`}>
                <div className={`col-start-5`}>
                     <Image src="/ic_logo.svg" height={200} width={200}/>
                </div>
                <div className={`flex flex-col items-center`}>
                    <Button style={styles.buttonApproval} type={TYPE_SUCCESS} title={"Aprobar Empresa"}/>
                    <Button style={styles.buttonReject}  type={TYPE_ERROR} title={"Rechazar Empresa"}/>
                </div>
                <div className={`col-start-1`}>
                    <Input titleInput={'Nombre de la Empresa'} value={'PREVALENTWARE'} />
                </div>
                <div className={`col-start-5`}>
                    <Input titleInput={'Razón Social'} value={'PREVALENTWARE S.A.S'}/>
                </div>
                <div className={`col-start-1`}>
                    <Input titleInput={'Tipo de identificación'} value={'NIT'}/>
                </div>
                <div className={`col-start-5`}>
                    <Input titleInput={'Identificación'} value={'901375150-4'}/>
                </div>
                <div className={`col-start-1`}>
                    <Input titleInput={'# de empleados'} value={'1-10'}/>
                </div>
                <div className={`col-start-5`}>
                    <Button type={TYPE_FILE} title={"Ver archivos adjuntos"}/>
                </div>
            </form>
        </div>
    ) 
}

export default CompanyApproval;