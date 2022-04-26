import { Link, Navigate } from "react-router-dom";

import { useEffect, useState } from "react"
import "./showList.css"

export default function ShowTodoList({list,getData}){
    let [editFlag,setEditFlag] = useState(false);
    let [updateTodo,setUpdateTodo] = useState({});
    
    

    
    const deleteTodo = (id)=>{
        fetch(`http://localhost:4000/${id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => getData())
    }

    const editTodo = (el)=>{
        setUpdateTodo(el);
        setEditFlag(true);


    }

    const changeStatus = (el)=>{
        if(el.status){
            const payload = {
                "status": false
    
            }
            fetch(`http://localhost:4000/${el._id}`,{
                method: "PATCH",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type" : "application/json"
                }
            })
            .then(res => res.json())
            .then(data =>{ 
                getData();
                
            
            })

        }else{
            const payload = {
                "status": true
    
            }
            fetch(`http://localhost:4000/${el._id}`,{
                method: "PATCH",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type" : "application/json"
                }
            })
            .then(res => res.json())
            .then(data =>{ 
                getData();
                
            
            })

        }


    }
    
    const handleChange = (e)=>{
            let { value, name } = e.target;
            
            setUpdateTodo({
                ...updateTodo,
                [name] : value
            
            })

    }
    const editSingleTodo = (id)=>{
        const payload = {
            "title":updateTodo.title,
            "description": updateTodo.description

        }
        fetch(`http://localhost:4000/${id}`,{
            method: "PATCH",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then(res => res.json())
        .then(data =>{ 
            getData();
            setEditFlag(false);
            
        
        })

    }
    if(editFlag){
        return (
            <div className="editDiv">
                <h3>title</h3>
                <input value={updateTodo.title} type="text" name="title" onChange={handleChange} />
                
                <h3>description</h3>
                <textarea value={updateTodo.description} name="description" onChange={handleChange}  ></textarea>
                <br />
                
                
                <div className="editbtnDiv">
                    <button onClick={()=> editSingleTodo(updateTodo._id)}>save</button>
                </div>
                

            </div>
        )
    }else{
        return (
            <div id="listDiv">
                {
                    list.map(el =>{
                    
                        return (
                            <div key={el._id}>
                                <h3>title</h3>
                                <p>{el.title}</p>
                                
                                <h3>description</h3>
                                <p>{el.description}</p>
                                <br />
                                <label >Status: </label>
                                <button style={el.status?{backgroundColor:"green"}:{backgroundColor:"red"}} onClick={()=> changeStatus(el)}>{el.status?"done":"not done"}</button>
                                <div className="btnDiv">
                                {/* <Link to={`/edit/${el._id}`} ><button > edit </button></Link> */}
                                   <button onClick={()=> editTodo(el)}> edit </button>
                                   <button onClick={()=> deleteTodo(el._id) } > delete </button>
                                </div>
                                
    
                            </div>
                        )
                    })
                }
                
    
            </div>
        )

    }


}