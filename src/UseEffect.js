import { useEffect, useState } from "react";
import UseEffectProps from './UseEffectProps';

export default function UseEffect(){
    const [data, setData] = useState(0);
    const[count, setCount] = useState(100);
    // useEffect(
    //     ()=>{
    //         console.log("data use effect");
    //     },[data]
    // )
    // useEffect(
    //     ()=>{
    //         console.log("count use effect");
    //     },[count]
    // )
    return(
        <div className="App">
            {/* <h1>{data}</h1>
            <h1>{count}</h1> */}
            <UseEffectProps count = {count} data = {data} />
            <button onClick={()=>setData(data+1)}>Update data</button>
            <button onClick={()=>setCount(count+1)}>Update count</button>
        </div>
    )
}