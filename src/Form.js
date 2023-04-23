import { useState } from "react";

export default function Form()
{
    function getFormData(e) {   // event "e"
        console.log(name, choose, tnc);
        e.preventDefault()
    }

    const[name, setName] = useState("");
    const[choose, setChoose] = useState("");
    const[tnc, setTnc] = useState(false);

    return(
        <div className="App">
            <h1>Handle Form in React !</h1>
            <form onSubmit={getFormData}>
                <input type = "text" placeholder="enter name" onChange={(e)=>setName(e.target.value)}></input>
                <br />
                <select name="" id="" onChange={(e)=>setChoose(e.target.value)}>
                    <option>choose option</option>
                    <option>1</option>
                    <option>2</option>
                </select>
                <br />
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span>Accept Terms and Conditions</span> 
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}