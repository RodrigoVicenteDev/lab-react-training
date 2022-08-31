import Rating from "../Rating";
import styles from './style.module.css'
function DriverCard({name, rating, img, car}){
    return(
        <>
        <div className={styles.container}>
            <div>
                <img className={styles.img} src={img}/>
            </div>
            <div>
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>

            </div>

        </div>
        </>
    )
}

export default DriverCard;