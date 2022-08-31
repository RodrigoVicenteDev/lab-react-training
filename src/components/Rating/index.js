

function Rating({children}){
    let filha = Math.round(children)
    let star = '★'
    let starEmpty = '☆'

    
    return(
        <>
        <div style={{displey:"flex", fexDirection:'column'}}>
            <h2>{star.repeat(filha).padEnd(5,starEmpty)}</h2>
        </div>
        </>
    )
}

export default Rating;