import {useState} from 'react'


function NumbersTable({limit}){

const [araay , setArray] = useState([])
 
const popular = []
for( let i=0; i< limit;i++){
    popular.push(i+1)

}
   




    return(

        <>
        <div style={{display:'flex'}}>
        {popular.map((element)=>{
            return(
                
                    <div style={{width:'50px', heigth:'10px', padding:'20px' ,border:'solid 2px black', backgroundColor:`${element%2 === 0 ?"red":"white"}`}}>{element}</div>
                
            )
        })}
        </div>
        </>
    )
}


export default NumbersTable;
