import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import User from "./User"
import './App.css'

export default function DynamicRouting(){

    let users = [
        {id:1, name:"js", email:"js@mail.com"},
        {id:2, name:"java", email:"java@mail.com"},
        {id:3, name:"cpp", email:"cpp@mail.com"},
        {id:4, name:"python", email:"python@mail.com"}
    ]

    return(
        <div className="App">
            <Router>
            <h1>Dynamic Routing</h1>
            {
                users.map((item)=>
                <Link key={item.id} to={"/user/"+item.id+"/"+item.name}><h3>{item.name}</h3></Link>
                )
            }
            <Routes>
            <Route path="/user/:id/:name" element={<User />} />
            </Routes>
            </Router>
        </div>
    )
}