import { Component, useState } from "react"

/*function State(){
    const [name,setname]=useState("rohit")
    function show(){
        setname("rahul")
    }
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={show}>show</button>
        </div>
    )
}*/

class State extends Component{
    constructor(){
        super()
        this.state={
            name:"raina",
            team:"csk",
        }
    }
    render(){
        return(
            <>
            <h1>{this.state.name}</h1>
            <h2>{this.state.team}</h2>
            <button onClick={()=>this.setState({name:"ash"})}>click</button>
            </>
        )
    }
}
export default State