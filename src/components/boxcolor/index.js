
function BoxColor({r,g,b}){
   function cor(){
    if (g=== 0){
        return "white"
    }else{
        return 'black'
    }
   }
        
    return(


        <>
        <div style={{backgroundColor:`rgb(${r},${g}, ${b})`, border:`1px solid black`,textAlign:`center`, margin:`20px`}}>
      <h2 style={{padding:`50px`, color:cor() }}>rgb({`${r},${g},${b}`})</h2>
        </div>    
        </>
    )
}

export default BoxColor;