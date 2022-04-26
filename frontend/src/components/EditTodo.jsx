import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export default function EditTodo() {
    let [todo,setTodo] = useState("")
    let [todo1,setTodo1] = useState("")
    let {id} = useParams();
    useEffect(()=>{
        console.log("id",id)
        fetch(`http://localhost:4000/${id}`)
        .then(res => res.json())
        .then(data => {
            setTodo(data.title)
            setTodo1(data.description)
            console.log(data)
        })
        .catch(err => console.log(err))

    },[])
    

    const handleChange = (e)=>{
        let{value,name} = e.target;
        console.log(value)
        if(name==="title"){
            setTodo(value)
        }else{
            setTodo1(value);
        }
    }
    return (
        <div >
            <h3>title</h3>
            <input value={todo}  type="text" name="title" onChange={handleChange} />

            <h3>description</h3>
            <input value={todo1} type="text" name="description" onChange={handleChange} ></input>
            <br />
            
            
            <div >
                <button > save </button>
                
            </div>


        </div>
    )
}