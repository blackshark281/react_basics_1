import { Button } from "react-bootstrap"

export default function Child(props) {
    const data = "javascript"
    return(
        <>
            <h3>Hello</h3>
            <Button onClick={()=>props.alert(data)}>
                Click Me
            </Button>
        </>
    )
}