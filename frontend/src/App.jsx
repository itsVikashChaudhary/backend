import React from 'react'
import './App.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';

import Navbar from './components/navbar/Navbar'
import Shop from './pages/Shop'
import ShopCatagory from './pages/ShopCatagory'
import LoginSignup from './pages/loginSignup'
import Cart from './pages/Cart'
import Footer from './components/footer/Footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'
import Product from './pages/Product';



function App() {
  return (
    
  
     <BrowserRouter>

     <Navbar/>
     <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/mens" element={<ShopCatagory  banner={men_banner} category="men" />} /> 
      <Route path="/womens" element={<ShopCatagory banner={women_banner} category="women" />} />
      <Route path="/kids" element={<ShopCatagory banner={kids_banner} category="kid" />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Route>
      </Routes>
     <Footer/>
    </BrowserRouter>
  );
}
export default App;







// import './App.css';
// import { BrowserRouter , Switch,Route } from 'react-router-dom';
// import Navbar from './components/navbar/Navbar'
// import Shop from './pages/Shop'
// import ShopCatagory from './pages/shopCatagory'
// import Product from './pages/product'
// import LoginSignup from './pages/loginSignup'
// import Cart from './pages/cart'
// import Footer from './components/footer/Footer';

// function App() {
//   return (
    
//     <div >
     
//      < BrowserRouter >
//      <Navbar/>
//      <Switch>
//      <Route path="/" component={Shop} />
//      <Route path="/mens" component={ShopCatagory} render={() => <ShopCatagory category="mens"/>} />
//       <Route path="/women" component={<ShopCatagory category="women"/>} />
//       <Route path="/kids" component={<ShopCatagory category="kids"/>} />
//       <Route path="/product" component={Product}>
//        <Route path = ':proudctId' component={<Product/>} />
//       </Route>
//       <Route>
//        <Route path = '/cart' component={<Cart/>} />
//        <Route path = '/login' component={<LoginSignup/>} />
//       </Route>
//      </Switch> 
//      <Footer/>
//      </BrowserRouter>
//     </div>
//   );
// }
// export default App;


