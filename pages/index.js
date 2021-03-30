import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header/header'
import Card from '../components/card/card'
import Link from 'next/link'

export default function Home() {
    return (
        <div className={styles.mainContainer}>
        <Head>
            <title>Gente Prevalente</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        <div className={`grid grid-cols-8 ${styles.cardsContainer}`}>
            <div className={`xl:col-start-2 xl:col-end-4 xl:mt-0 mt-8 col-start-1 col-end-9`}>
                <Link href="/company-approval">
                <a className={`md:items-center ${styles.link}`}><Card image={'ic_request'} title={'Solicitudes de creación de empresas'} text={'Dos solicitudes sin tratar'}/></a>
                </Link>
            </div>
            <div className={`xl:col-start-5 xl:col-end-7 xl:mt-0 mt-8 md:items-center col-start-1 col-end-9 ${styles.cardContainer}`}>
                <Card image={'ic_indicator'} title={'Indicadores'} text={'visitado por ultima vez: 31/01/2020'}/>
            </div>
            <div className={`xl:col-start-2 xl:col-end-4 xl:mt-0 mt-8 md:items-center col-start-1 col-end-9 ${styles.cardContainer}`}>
                <Card image={'ic_employee'} title={'Inscripción de empleados en empresas'} text={'3 usuarios sin empresa'}/>
            </div>
            <div className={`xl:col-start-5 xl:col-end-7 xl:mt-0 mt-8 md:items-center col-start-1 col-end-9 ${styles.cardContainer}`}>
                <Card image={'ic_admi'} title={'Gestión de usuarios'} text={'532 usuarios activos en la plataforma'}/>
            </div>
            </div>     
        </div>
    )
}
