import React, {useState} from "react";

export default function InputBox() {

    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);  

    function UpdateValue(val) {
        setData(val.target.value);
        setPrint(false);
    }

    return(
        <div className="App">
            {
                print?
                <h1>{data}</h1>
                : <h3>Enter Text</h3>
            }
            <input type="text" onChange={UpdateValue}/>
            <button onClick={()=>{setPrint(true)}}>Print Data</button>
        </div>
    )
}