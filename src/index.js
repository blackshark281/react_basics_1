import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello';
import User from './User';
import Testing from './Testing';
import click from './click';
import ReactState from './ReactState';
import FunctionalProps from './FunctionalProps';
import InputBox from './InputBox';
import Toggle from './Toggle';
import Form from './Form';
import UseEffect from './UseEffect';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bootstrap from './Bootstrap';
import Map from './Map';
import SendDataFromChild from './SendDataFromChild';
import UseMemo from './UseMemo';
import UseRef from './UseRef';
import DynamicRouting from './DynamicRouting';
import GetApi from './GetApi';
import PostApi from './PostApi';
import GetPreviousState from './GetPreviousState';
import GetPreviousProps from './GetPreviousProps';
import LiveContest from './LiveContest';
import LiveNews from './LiveNews';
import Login from './login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <nav>
      <Hello />
      <User />
    </nav> */}
    {/* <Testing /> */}
    {/* <button onClick={click}> click me </button> */}
    {/* <ReactState />
    <FunctionalProps />
    <InputBox />
    <Toggle />
    <Form />
    <UseEffect />
    <Bootstrap />
  */}
    {/* <Map /> */}
    {/*<SendDataFromChild />
    <UseMemo />
    <UseRef /> */}
    {/* <reel1 /> */}
    {/* <DynamicRouting /> */}
    {/* <PostApi /> */}
    {/* <GetApi /> */}
    {/* <LiveContest /> */}
    <LiveNews />
    {/* <Login /> */}
    {/* <GetPreviousState /> */}
    {/* <GetPreviousProps /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
