
import { useState } from "react"
import "./form.css";


export default function Form({ getData }) {
    const API = process.env.React_App_MY_API;
    let [isLoading, setIsLoading] = useState(false);
    let [form, setForm] = useState({
        title: "",
        description: ""
    })

    const handleChange = (e) => {
        let { value, name } = e.target;
        form[name] = value;
        console.log(form);
        setForm({ ...form });
    }

    const handleClick = () => {
        let payload = {
            "title": form.title,
            "description": form.description,
            "status": false
        }
        setIsLoading(true);
        fetch(`${API}`, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                setIsLoading(false);
                getData();
                setForm({
                    title: "",
                    description: ""
                })

            })
            .catch(error => console.log(error));

    }

    return (
        <div className="formDiv">
            <input value={form.title} type="text" name="title" placeholder="title" onChange={handleChange} />
            <br />
            <br />
            <textarea value={form.description} type="text" name="description" placeholder="description" onChange={handleChange} />
            <br />
            <br />
            <button onClick={handleClick} > {isLoading ? "loading..." : "Add Todo"} </button>

        </div>
    )
}