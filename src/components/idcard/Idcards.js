import styles from './style.module.css'

function IdCard({lastName ,firstName,gender,height,birth,picture}){
    return(
        <>
        <div className={styles.container}>
            <div>
                <img src={picture} alt='..'/>
            </div>
            <div>
                <p >
                    <span className={styles.span}>First Name: </span>{firstName} <br></br>
                    <span className={styles.span}>Last Name: </span> {lastName}<br></br>
                    <span className={styles.span}>Gender: </span>{gender}<br></br>
                    <span className={styles.span}>Height: </span>{height}<br></br>
                    <span className={styles.span}>Birth: </span>{birth}
                </p>
            </div>
        </div>   
        </>
    )
}

export default IdCard;