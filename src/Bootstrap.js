import { Button } from "react-bootstrap";

export default function Bootstrap() {
    return(
        <div className="App">
            <h1>Working on Bootstrap</h1>
            <Button onClick={()=>alert("hello")}>Click me</Button>
        </div>
    )
}