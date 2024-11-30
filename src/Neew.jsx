import { useState } from "react"

const Neew=()=>{
    const [count,setCount]=useState(0)
    const incre=()=>setCount(count+1)
    const decre=()=>setCount(count-1)
    return(
        <>
        <h1 style={{color:"red"}}>Count is:{count}</h1>
        <button onClick={incre}>incre</button>
        <button onClick={decre}>decre</button>
        </>
    )
}
export default Neew