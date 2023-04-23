import { useEffect, useState } from "react"
import { Table } from "react-bootstrap";
import './App.css'

// Get Update and Delete all 3 API's

import { Button } from 'react-bootstrap'
const API_BASE = "http://localhost:3000";

export default function GetApi() {

    const [data, setData] = useState([]);

    const[name, setName] = useState("");
    const[price, setPrice] = useState("");
    const[brand, setBrand] = useState("");
    const[category, setCategory] = useState("");
    const[userId, setuserId] = useState(null);

    useEffect(()=>{
        getList();
    }, [])

    // console.log(data)

    // function to get all data

    function getList() {
        fetch(`${API_BASE}/search`).then((result)=>{
            result.json().then((res)=>{
                setData(res);
                setName("enter name")
                setPrice("000")
                setBrand("enter brand")
                setCategory("enter category")
            })
        })
    }

    // function to delete a single row
    function deleteUser(id) {
        fetch(`${API_BASE}/delete/${id}`, {
            method : 'DELETE'
        }).then((result)=>{
            result.json().then((res)=>{
                console.log("data deleted successfully")
                getList()
            })
        })
    }

    function selectUser(item) {
        console.log(item)
        setName(item.name)
        setPrice(item.price)
        setBrand(item.brand)
        setCategory(item.category)
        setuserId(item._id)
    }

    function updateUser() {
        // console.log(userId, name, price, brand, category)
        let userData = {userId, name, price, brand, category}
        fetch(`${API_BASE}/update/${userId}`, {
            method : 'PUT',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(userData)
        }).then((result)=>{
            result.json().then((res)=>{
                console.log("data updated successfully")
                getList()
            })
        })
    }

    return(
        <div className="getApiApp App">
            <div>
                <h1 className="getApiAppTableDiv">Get API</h1>
                <Table border="1" striped bordered hover>
                    <caption className="cap">Users data</caption>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>price</td>
                            <td>brand</td>
                            <td>category</td>
                            <td>operations</td>
                        </tr>
                        {
                            data.map((item, i)=>
                            <tr key={i}>
                                    <td>{item._id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.category}</td>
                                    <td className="space_btw_btn">
                                        <Button onClick={()=> deleteUser(item._id)}>Delete</Button>
                                        <Button onClick={()=> selectUser(item)}>Update</Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
            <div className="getApiAppUpdateDiv">
                <input type="text" value={name} name="" onChange={(e)=>{setName(e.target.value)}} /> <br /> <br />
                <input type="text" value={price} name="" onChange={(e)=>{setPrice(e.target.value)}} /> <br /> <br />
                <input type="text" value={brand} name="" onChange={(e)=>{setBrand(e.target.value)}} /> <br /> <br />
                <input type="text" value={category} name="" onChange={(e)=>{setCategory(e.target.value)}} /> <br /> <br />
                <Button type="button" onClick={updateUser}>Update Data</Button>
            </div>
        </div>
    )
}