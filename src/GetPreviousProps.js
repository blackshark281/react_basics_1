import { useState } from "react";
import Hello from "./Hello";
import { Button } from "react-bootstrap";

export default function GetPreviousProps() {

    const [count, setCount] = useState(0);

    return(
        <div className="App">
            <Hello count={count}/>
            <Button onClick={()=>setCount(Math.floor(Math.random()*100))}>Update Value</Button>
        </div>
    )
}