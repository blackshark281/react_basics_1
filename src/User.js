import { useLocation } from "react-router-dom";

function User (){
    let location = useLocation();

    // console.log(location.pathname);
    // console.log(pr)
    let prop = location.pathname;
    let propId = prop.substring(6,7);
    let propName = prop.substring(8, prop.length)

    // console.log(propName)
    return(
        <div className = "App">
            <h1>This is User Number {propId}</h1>
            <h1>My language is {propName}</h1>
        </div>
    );
}

export default User;