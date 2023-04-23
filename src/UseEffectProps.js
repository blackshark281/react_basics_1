import { useEffect, useState } from "react";

export default function UseEffectProps(props){
    // const [data, setData] = useState(0);
    // const[count, setCount] = useState(100);
    useEffect(
        ()=>{
            console.log("use effect");
        },[props.count, props.data]
    )
    // useEffect(
    //     ()=>{
    //         console.log("count use effect");
    //     },[count]
    // )
    return(
        <div className="App">
            <h1>{props.data}</h1>
            <h1>{props.count}</h1>
            {/* <button onClick={()=>setData(data+1)}>Update data</button>
            <button onClick={()=>setCount(count+1)}>Update count</button> */}
        </div>
    )
}