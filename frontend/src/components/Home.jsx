import { useEffect, useState } from "react";
import Form from "./Form";
import ShowTodoList from "./ShowTodoList";
import Navbar from "./Navbar";


export default function Home() {
    const API = process.env.React_App_MY_API;
    let [list, setList] = useState([]);

    useEffect(() => {
        fetch(`${API}`)
            .then(res => res.json())
            .then(data => setList(data))
            .catch(err => console.log(err))

    }, [])
    const getData = () => {
        fetch(`${API}`)
            .then(res => res.json())
            .then(data => setList(data))
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