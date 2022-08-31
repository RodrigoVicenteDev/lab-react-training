import styles from './style.module.css'
function Randon({min,max}){
     
    return(
        <>
        <div className={styles.div}>
            <h3>Randon values between {min} and {max} =  {Math.floor(Math.random() * (max - min) + min)}</h3>

        </div>
        </>
    )
}

export default Randon;