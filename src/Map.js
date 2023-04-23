import { Fragment } from "react";
import { Table } from "react-bootstrap";

export default function Map() {
    // nested json list
    const student = [
        {
            name:"java",
            phone:"000",
            address:[{
                city:"aaa",
                country:"ind"
            },
            {
                city:"bbb",
                country:"ind"
            }]
        },
        {
            name:"json",
            phone:"111",
            address:[{
                city:"aaa",
                country:"ind"
            },
            {
                city:"ccc",
                country:"ind"
            }]
        },
        {
            name:"html",
            phone:"111",
            address:[{
                city:"aaa",
                country:"ind"
            },
            {
                city:"ddd",
                country:"ind"
            }]
        }
    ];

    return( // using react fragments instead of div as a parent tag
        <div className="App">  
            <h4>"For-loops" does not work in return statement in react hence "map" is used</h4>
                <Table border="1" striped bordered hover>
                    <tbody>
                    <tr className="Map">
                    <td>#</td>
                    <td>Name</td>
                    <td>Phone</td>
                    <td>Address</td>
                    </tr>
                    {/* </tbody> */}
                    {
                        student.map((data, i)=>     // for unique key error "i" is used as an iterator
                            // unique key is applied so that virtual DOM can easily identify any specific record
                        <tr key={i} className="Map">            
                            <td>{i}</td>
                            <td>{data.name}</td>
                            <td>{data.phone}</td>
                            <td>
                                <Table>
                                    <tbody>
                                        {
                                            data.address.map((item)=>
                                                <tr className="Map">
                                                    <td>
                                                        {item.city}
                                                    </td>
                                                    <td>
                                                        {item.country}
                                                    </td>
                                                </tr>
                                            )
                                        } 
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                        )
                    }
                    </tbody>
                </Table>
        </div>
    )
}