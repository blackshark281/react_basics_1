import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./App.css";

// Get Update and Delete all 3 API's

// import { Button } from 'react-bootstrap'
const API_BASE = "https://kontests.net/api/v1/all";

export default function LiveContest() {
  const [data, setData] = useState([]);

  // lifecycle method
  useEffect(() => {   
    getList();
  }, []);

  // console.log(data)

  // function to get all data

  function getList() {
    fetch(`${API_BASE}`).then((result) => {
      result.json().then((res) => {
        setData(res);
      });
    });
  }

  return (
    <div className="getApiApp App">
      <div>
        <Table border="1" striped bordered hover>
          <caption className="cap">All upcoming contests</caption>
          <tbody>
            <tr>
              <td>Name</td>
              <td>URL</td>
              <td>Site</td>
              <td>Start Time</td>
              {/* <td>status</td> */}
            </tr>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>
                  <a href={item.url} target="_blank">{item.url}</a>
                </td>
                <td>{item.site}</td>
                <td>{item.start_time}</td>
                {/* <td>{item.status}</td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
