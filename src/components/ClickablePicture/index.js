import {useState} from 'react'
import imagem from '../../assets/images/maxence.png'
import clicada from '../../assets/images/maxence-glasses.png'

function ClickablePicture({img,imgClicked }){


   const [status,setStatus]= useState(true)
   
   
   function handleClick(){
    setStatus(!status)
           
}
    return(
        <>
        <img onClick={handleClick} src={status? imagem:clicada} />
        </>
    )
}

export default ClickablePicture;