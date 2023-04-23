import { useState } from "react"
import { Button } from "react-bootstrap";

export default function GetPreviousState() {

    const [count, setCount] = useState(1);

    function updateCount() {
        setCount((prevVal)=>{
            console.log(prevVal)
            return Math.floor(Math.random()*10)
        })
    }

    return(
        <div className="App">
            <h1>{count}</h1>
            <Button onClick={updateCount}>Update Value</Button>
        </div>
    )
}