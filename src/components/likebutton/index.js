import {useState} from 'react'


function LikeButton(){
    const[contador , setContador] = useState(0)
    const[cores, setCores] = useState(['purple','blue','green','yellow','orange','red'])
    const[cor, setCor] = useState('')

    function handleChange(){
        setCor(cores[Math.floor(Math.random() * (6 - 0) + 0)])
        setContador(contador +1)
      
        
}
    return(
        <>
        <button style={{backgroundColor:`${cor}`}} onClick={handleChange}>{contador} Likes</button>
        
        </>
    )
}


export default LikeButton;