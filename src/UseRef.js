import { useRef } from "react"

export default function UseRef() {

    let inputRef = useRef(null);

    function updateRef(){
        inputRef.current.value=10000;
        inputRef.current.focus();
        inputRef.current.style.color="yellow"
        inputRef.current.style.backgroundColor="black"
    }

    return(
        <div className="App">
            <span><h2>Use Ref is used to access and control DOM directly.</h2>
            <h4>react does not recommend using "ref"</h4></span>
            <input type="text" ref={inputRef} />
            <button onClick={updateRef}>Check ref</button>
        </div>
    )
}