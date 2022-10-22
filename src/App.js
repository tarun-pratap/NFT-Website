import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/navbar"
import Dashboard from './components/dashboard/Dashboard';
import MarketPlace from './components/marketplace/MarketPlace';
import Home from './components/home/Home';

import {  Routes, Route } from "react-router-dom";
import Nftdetails from './components/mynftpage/Nftdetails';



function App() {
  return (
    <>
    <div className="pages">

    <Navbar/> 
    {/* <MarketPlace/> */}
    {/* <Home/> */}
    {/* <Dashboard/> */}
    {/* <Nftdetails/> */}
    </div>  
    </>
  );
}

export default App;
