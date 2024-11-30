import Form from 'react-bootstrap/Form';
import './style.css'
import { useState } from 'react';
const Postdata=()=>{
    const [title,settitle]=useState()
    const [date1,setdate1]=useState()
    const [blog,setblog]=useState()
    function postdata(){
        let data={title,date1,blog}
        fetch("http://localhost:3000/posts",{
             method:"POST",
        headers:{
            "Accept":"application/json",
            "Content-type":"application/json"
        },
        body:JSON.stringify(data)
        })
    }
    return(
        <>
         <Form className='box'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Title</Form.Label>
        <Form.Control type="text" onChange={(t)=>settitle(t.target.value)} />
      </Form.Group><br/>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter date</Form.Label>
        <Form.Control type="date" onChange={(d)=>setdate1(d.target.value)} />
      </Form.Group><br/>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Example textarea</Form.Label>
        <Form.Control type="textarea" rows={3} onChange={(b)=>setblog(b.target.value)} />
      </Form.Group><br/>
      <button className="bt" onClick={postdata}>add blog</button>
    </Form>
        </>
    )
}
export default Postdata