import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';
import MarketPlace from './components/MarketPlace';
import Home from './components/Home';



function App() {
  return (
    <>
    <Navbar/>
    <div className="pages">

    {/* <Dashboard/> */}
    <MarketPlace/>
    {/* <Home/> */}


    </div>
    </>
  );
}

export default App;
