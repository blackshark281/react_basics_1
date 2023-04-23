import { useState, useEffect } from "react"

import GetApi from "./GetApi";

import { Button } from "react-bootstrap";

const API_BASE = "http://localhost:3000";

export default function PostApi(){

    // const[id, setId] = useState("");
    const[name, setName] = useState("");
    const[price, setPrice] = useState("");
    const[brand, setBrand] = useState("");
    const[category, setCategory] = useState("");

    // const [data, setData] = React.useState(localStorage.getItem("userData"));

    const [data, setData] = useState([]);

    function saveUser() {
        let data = {name, price, brand, category}
        fetch(`${API_BASE}/insert`, {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        }).then((result)=>{
            result.json().then((res)=>{
                console.log("response", res)
            })
        })
    }

    return(
        <div className="App">
            <h1>Post API</h1>
            {/* <input type="text" value={id} name="" onChange={(e)=>{setId(e.target.value)}} placeholder="id" /> <br /> <br /> */}
            <input type="text" value={name} name="" onChange={(e)=>{setName(e.target.value)}} placeholder="name" /> <br /> <br />
            <input type="text" value={price} name="" onChange={(e)=>{setPrice(e.target.value)}} placeholder="price" /> <br /> <br />
            <input type="text" value={brand} name="" onChange={(e)=>{setBrand(e.target.value)}} placeholder="brand" /> <br /> <br />
            <input type="text" value={category} name="" onChange={(e)=>{setCategory(e.target.value)}} placeholder="category" /> <br /> <br />
            <Button type="button" onClick={saveUser}>Save data</Button>
        </div>
    )
}