import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./App.css";

// Get Update and Delete all 3 API's

// import { Button } from 'react-bootstrap'
const API_BASE = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=2e1e15b580be4d718c7b184278448af0";

export default function LiveNews() {
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
        setData(res.articles);
      });
    });
  }

  return (
    <div className="mainDiv">
      <h1 className="news-h1">Latest news from US</h1>
      <div className="outside-card">
        {data.map((item, i) => {
          return (
            <div>
              <a href={item.url} target="_blank">
                <div className="card">
                  <div className="card-image"
                    style={{ backgroundImage: `url(${item.urlToImage})` }}> 
                    {/* <img src={item.urlToImage}> */}
                       <p className="card-title"> {item.title} </p>
                     {/* </img> */}
                  </div>
                  <div>
                    {/* <p className="card-title">
                      {item.title}
                    </p> */}
                    <p className="card-description">
                      {item.content}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
