import logo from "./components/image-20231114-143925-5507bda3.jpeg";
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Buyers from './components/Buyers';
import Sellers from './components/Sellers';
import Listings from './components/Listings';
import Bookings from './components/Bookings';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
<div>
    <div className="App">
      
      <BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>

        <nav>
          <Link to='/'> HOME </Link>
          <Link to='/buyers'> BUYERS </Link>
          <Link to='/sellers'> SELLERS </Link>
          <Link to='/properties'> PROPERTIES </Link>
          <Link to='/bookings'> BOOKINGS </Link>
          

        </nav>
        
        <Routes>


          <Route path='/' element={<Home />} />
          <Route path='/buyers' element={<Buyers />} />
          <Route path='/sellers' element={<Sellers />} />
          <Route path='/properties' element={<Listings />} />
          <Route path='/bookings' element={<Bookings />} />




        </Routes>





      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
