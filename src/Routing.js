import React from "react"
import { Route, Routes } from "react-router-dom";
import Covid from "./Covid-19-Live/Covid";
import Statewise from "./StateWiseCovid-19/Statewise";
import Navbar from "./Navbar";

const Routing = () => {
    return (
        <>
         <Navbar /> 
        <div> 
        <Routes>
            <Route path="/" element={<Covid />}/> 
            <Route path="/Statewise" element={<Statewise />}/> 
        </Routes>
        </div>
         
            
        </>
    )
}
export default Routing;


