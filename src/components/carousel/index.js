import {useState} from 'react'


function Carousel({images}){
    const [imgs , setImagens] = useState(images)
    const [contador , setContador] = useState(1)
    const [img , setImg] = useState(imgs[0])
    
    function handleClick(){
        if(img === imgs[imgs.length-1]){
            setContador(contador - (contador)+1)
            setImg(imgs[0])
        }else{ 
        setContador(contador + 1)
        setImg(imgs[contador])
       
        }
    }

    return (
        <>
        <img onClick={handleClick} src={img} />
        </>
    )


}

export default Carousel;