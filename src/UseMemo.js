import { useState, useMemo } from "react"

export default function UseMemo() {

    const [count, setCount] = useState(0);
    const [item, setItem] = useState(1);

    const UseMemoFunction =  useMemo(function MemoFunction(){
        console.log("use memo re-render");
        // return count*2;
    }, [count])

    return(
        <div className="App">
            <h3>
                using "use memo" hook in react functional component to stop un-necessary rendering.
                works same as "pure component" from class component
            </h3>
            <h2>count : {count}</h2>
            <h2>item : {item}</h2>
            {/* <h2>memo : {UseMemoFunction}</h2> */}
            <button onClick={()=> setCount(count+1)}>update count</button>
            <button onClick={()=> setItem(item*10)}>update item</button>
        </div>
    )
}