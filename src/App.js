import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import Routing from './Routing';
import "./index.css";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
      {/* <Covid /> */}
      {/* <h1>COVID-13 CORONAVIRUS TRACKER</h1> */}
      {/* <br /><br /> */}
      {/* <Statewise /> */}
    </>
  )
}
export default App;