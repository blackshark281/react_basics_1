import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="App">
      <h2>
        <Link to="/form">Form Page</Link></h2>
      <br />
      <h2>
        <Link to="/map">Map Page</Link></h2>
    </div>
  );
}
