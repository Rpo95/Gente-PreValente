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
      <div className={`self-center grid grid-cols-2 gap-8 ${styles.cardsContainer}`}>
          <Link href="/company-approval">
            <a><Card image={'ic_solicitud'} title={'Solicitudes de creación de empresas'} text={'Dos solicitudes sin tratar'}/></a>
          </Link>
          <Card image={'ic_indicador'} title={'Indicadores'} text={'visitado por ultima vez: 31/01/2020'}/>
          <Card image={'ic_empleado'} title={'Inscripción de empleados en empresas'} text={'3 usuarios sin empresa'}/>
          <Card image={'ic_admi'} title={'Gestión de usuarios'} text={'532 usuarios activos en la plataforma'}/>
        </div>     
    </div>
  )
}
