
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className="App">

      <Navbar/>
      
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/Products' element={<Products/>}/> 
      <Route exact path='/Products/:id' element={<Product/>}/>
      <Route exact path='/Cart' element={<Cart/>}/>
      <Route exact path='/Checkout' element={<Checkout/>}/>
      <Route exact path='/Login' element={<Login/>}/>
      <Route exact path='/Register' element={<Register/>}/>
      <Route exact path='/About' element={<About/>}/>
      <Route exact path='/Footer' element={<Footer/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
