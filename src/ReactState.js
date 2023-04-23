import { useState } from "react"

function ReactState() {
    const [data, setData] = useState(0);

    function updateData(){
        setData(data+1);
    }

    return(
        <div className="App">
            <h1>{data}</h1>
            <button onClick={updateData}>Incerement Value</button>
        </div>
    );
}

export default ReactState;