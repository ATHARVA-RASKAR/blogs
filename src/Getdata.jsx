import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
const Getdata=()=>{
    const [info,setinfo]=useState([])
    useEffect(()=>{
        Getinfo()
    },[])
    function Getinfo(){
        fetch("http://localhost:3000/posts").then((res)=>res.json()).then((result)=>setinfo(result))
    }
    function delete1(id){
      fetch(`http://localhost:3000/posts/${id}`,
        {
          method:"DELETE"
        }
      )
      Getinfo()
    }
    return(
        <>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Blog</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            info.map((item)=>
                <tr>
                    <td>{item.title}</td>
                    <td>{item.date1}</td>
                    <td>{item.blog}</td>
                    <td><button onClick={()=>delete1(item.id)}>Delete</button></td>
                </tr>
            )
        }
      </tbody>
    </Table>
        </>
    )
}
export default Getdata