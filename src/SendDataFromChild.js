import Child from "./Child";

export default function SendDataFromChild() {

    function parentAlert(params) {
        alert(params);
    }

    return(
        <div className="App">
            <h1>
                Sending data from child component to parent "Lifting State up"
            </h1>
            <Child alert={parentAlert}/>
        </div>
    )
}