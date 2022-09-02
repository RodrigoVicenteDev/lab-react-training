import profiles from '../../data/berlin.json';
import styles from './style.module.css'
import {useState} from 'react'


function FaceBook(){
    const[perfis, setPerfis] = useState(profiles)
 
    return(
       
         <>
        <div className={styles.container}>
            {perfis.map((element)=>{
                return(
                    <>
                    <div className={styles.card}>     
            <div>
                <img className={styles.img} src={element.img} alt='..'/>
            </div>
            <div>
                <p >
                    <span className={styles.span}>First Name: </span>{element.firstName} <br></br>
                    <span className={styles.span}>Last Name: </span> {element.lastName}<br></br>
                    <span className={styles.span}>Contry: </span>{element.country}<br></br>
                    <span className={styles.span}>Type: </span>{element.isStudent ?"Studenty":"Teacher"}<br></br>
                    
                </p>
            </div> 
            </div>   
        </> 
                )
            })
                }
        </div>   
        </> 
    )
}
        
    

export default FaceBook;
