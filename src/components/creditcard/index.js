import bandeira from "../../assets/images/visa.png"
import styles from "./style.module.css"

function CreditCard(props){
    let numero = `•••• •••• •••• ${props.number.slice(-4)}`
    return(
        
            <div className={styles.card} style={{backgroundColor:`${props.bgColor}`, color:`${props.color}`}}>
                <div className={styles.img}>
                    <img className={styles.bandeira} src={bandeira} alt="..."></img>
                </div>
                <div>
                <h1 style={{textAlign:"center"}}>{numero}</h1>
                
                    <p style={{marginBottom:'0'}}> Expires {props.expirationYear}/{props.expirationMonth} <spam style={{marginLeft: '20px'}}>{props.bank}</spam> </p>
                    <p style={{marginTop:'0'}}>{props.owner}</p>
                
                </div>
            </div>
        
    )
}

export default CreditCard;