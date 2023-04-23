import { useState } from "react";
import Student from "./Student";

function FunctionalProps() {
  const [name, setName] = useState("Blacky");

  return (
    <div className="App">
      <h2>Using props in Function</h2>
      <Student name={name} />
      <button
        onClick={() => {
          setName("Golden king");
        }}
      >
        Update Name
      </button>
    </div>
  );
}

export default FunctionalProps;
