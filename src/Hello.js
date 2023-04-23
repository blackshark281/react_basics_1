import { useEffect, useRef } from "react";

function Hello(props) {

  const prevVal = useRef();
  // prevVal stores last value because useEffect runs before the update count return function 
  // hence useRef gets its value from DOM therefore it has previous value

  useEffect(()=>{
    prevVal.current = props.count;
  })

    return (
      <div className="App">
        <h1>
            Get Previous Props Component
        </h1>
        <h1>Current Value is {props.count}</h1>
        <h1>Previous Value was {prevVal.current}</h1>
      </div>
    );
  }
  
export default Hello;