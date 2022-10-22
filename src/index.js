import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import App from './App';
import Login from './components/loginsignup/Login';
import Register from './components/loginsignup/Register';
import Home from './components/home/Home';
import MarketPlace from './components/marketplace/MarketPlace';
import Nftdetails from './components/mynftpage/Nftdetails';
import Dashboard from './components/dashboard/Dashboard';
import Explore from './components/explore/explore';
import MyNft from './components/mynftpage/mynft';
import Analytics from './components/analytics/Analytics';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

 

    <BrowserRouter>
    {/* <Login /> */}
    {/* <App/> */}
    {/* <Nftdetails/> */}
      <Routes>

        <Route exact path='/' element={< Login />}></Route>
        <Route exact path='/register' element={< Register />}></Route>
        <Route exact path='/user' element={< App />}>
          <Route path="home" element={<Home />} />
          <Route path="marketplace" element={<MarketPlace />}/>
          <Route path="nftdetails" element={<Analytics />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="explore" element={<Explore />} />
          <Route path="mynft" element={<MyNft />} />
        </Route>

      </Routes>
    </BrowserRouter>


    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
