import { useEffect, useState } from "react";
import Form from "./Form";
import ShowTodoList from "./ShowTodoList";
import Navbar
 from "./Navbar";
export default function Home(){
    let [list,setList] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000")
        .then(res => res.json())
        .then(data =>setList(data) )
        .catch(err => console.log(err))

    },[])
    const getData = ()=>{
        fetch("http://localhost:4000")
        .then(res => res.json())
        .then(data =>setList(data) )
        .catch(err => console.log(err))

    }
    
    return (
        <div>
            <Navbar />

            <Form getData={getData} />
            <hr />
            <ShowTodoList list={list} getData={getData} />

        </div>
    )
}