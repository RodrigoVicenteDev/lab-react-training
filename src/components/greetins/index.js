import styles from './style.module.css'

function Greetings({lang , children}){
    return(
        <>
        <div className={styles.div}>
           <h3>{lang === 'de'?'Hallo': 'bonjour'} {children}</h3> 
        </div>    
        </>
    )
}

export default Greetings;