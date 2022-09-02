import dice0 from  '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

import {useState} from 'react'


function Dice(){

    const [numero , setNumero] = useState([dice1,dice2,dice3,dice4,dice5,dice6])
    const [dado, setDado] = useState(dice0)

    function handleClick(){
        setTimeout(()=>{
            setDado(numero[Math.floor(Math.random() * (numero.length - 0) + 0)])
        },1000)
    }

    return(
        <>
        <img style={{width:"200px"}} onClick={handleClick} src={dado}/>
        </>
    )
}


export default Dice;