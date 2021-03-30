import styles from './header.module.css';
import Image from 'next/image'

const Header = () => {
    return (
        <div className={`grid grid-cols-12 ${styles.mainContainer}`}>
            <div className={`flex items-center justify-center col-span-2 ${styles.logoContainer}`}>
                <Image src="/ic_brain.svg" height={30} width={30}/>
                <h2 className={styles.title}>Gente PreValente</h2>
            </div>
            <div className={`xl:flex 2xl:flex hidden items-center justify-center col-span-3 ${styles.searchContainer}`}>
                <Image src="/ic_lens.svg" height={15} width={15}/>
                <input type="text" className={styles.searchInput} placeholder="Buscar..."/> 
            </div>
            <div className={`xl:flex 2xl:flex hidden items-center justify-center col-span-2 ${styles.settingsContainer}`}>
                <Image src="/ic_gear.svg" height={15} width={15}/>
                <h2 className={styles.title}>Administración</h2>
                <p className={styles.notification}>2</p>
            </div>
            <div className={`xl:flex 2xl:flex hidden items-center justify-center col-span-1 ${styles.employmentContainer}`}>
                <Image src="/ic_bag.svg" height={15} width={15}/>
                 <h2 className={styles.title}>Empleo</h2>
                 <Image className={styles.arrow} src="/ic_arrow.svg" height={15} width={15}/>

            </div>
            <div className={`xl:flex 2xl:flex hidden items-center justify-center col-start-10 col-end-11 ${styles.cvContainer}`}>
                <Image src="/ic_cv.svg" height={15} width={15}/>
                <h2 className={styles.title}>Mi CV</h2>
            </div>
            <div className={`xl:flex 2xl:flex hidden items-center justify-center col-start-11 col-end-13  ${styles.profileContainer}`}>
                <Image src="/ic_cv.svg" height={15} width={15}/>
                <h2 className={styles.title}>Mateo</h2>
                <Image className={styles.arrow} src="/ic_arrow.svg" height={15} width={15}/>
            </div>
            <div className={"xl:hidden 2xl:hidden flex col-start-12 "}>
                <Image src="/ic_menu.svg" height={20} width={20}/>
            </div>
        </div>
    )
}

export default Header;