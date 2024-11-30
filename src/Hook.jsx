import { useContext } from "react"
import {nm,ct} from './App'
import { useRef } from "react"
/*let Hook=()=>{
    const firstname=useContext(nm)
    const city=useContext(ct)
    return(
        <>
        <h1>{firstname} is cap of {city}</h1>
        </>
    )
}*/

function Hook(){
    const txt=useRef()
    function show(){
        txt.current.value="welcome"
        txt.current.style.color="blue"
    }
    return(
        <>
        <input type="text" ref={txt}/>
        <button onClick={show}>show</button>
        </>
    )
}
export default Hook