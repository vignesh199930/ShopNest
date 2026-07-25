import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/navbar/Navbar';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import Wishlist from './pages/Wishlist';
import OrderSuccess from './pages/OrderSuccess';
import OrderHistory from './pages/OrderHistory';
import { useState, useEffect } from 'react';
import ProtectedRoute from './components/ProtectedRoute';


function App() {

  const [search, setSearch] = useState('');

  const [orders, setOrders] =

  useState(()=>{
    return JSON.parse(localStorage.getItem('orders')) || [];
  })

  const [cart, setCart] = useState(() => {
  return JSON.parse(localStorage.getItem("cart")) || [];
});

const [wishlist, setWishlist] = useState(() => {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
});

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

useEffect(() => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}, [wishlist]);

useEffect(() =>{
  localStorage.setItem('orders',
    JSON.stringify(orders));
}, [orders]);


  return (
    <>
     <Navbar
       cart={cart}
       wishlist={wishlist}
       search={search}
       setSearch={setSearch}
       />
      <Routes>
        
        <Route path ='/'
         element={<Home cart={cart} 
                  setCart={setCart} 
                  wishlist={wishlist} 
                  setWishlist={setWishlist} 
                  search={search} 
                  setSearch={setSearch}
               />}
               />

        <Route path ='/cart' 
        element={<Cart cart={cart} setCart={setCart}/>}/>

        <Route path ='/login'
         element={<Login/>}/>

        <Route path ='/register' 
        element={<Register/>}/>

        <Route path='/product/:id'
        element={
          <ProductDetails
          cart={cart}
          setCart={setCart}
          />
        }/>

        <Route
        path='/checkout'
        element={
          <Checkout
          cart={cart}
          setCart={setCart}
          orders={orders}
          setOrders={setOrders}/>
        }/>
        
        <Route path='/forgot-password'
      element={<ForgotPassword/>}/>


      <Route path='/order-success'
      element={<OrderSuccess/>}
      />

      <Route path='/orders'
      element={<OrderHistory
      orders={orders}/>}
      />

      <Route path='/wishlist'
      element={
        <Wishlist
        wishlist={wishlist}
        setWishlist={setWishlist}
        />
      }
      />
      <Route
      path='/profile'
      element={
        <ProtectedRoute>
          <Profile/>
        </ProtectedRoute>
         }/>

         

      </Routes>
    </>
  );
}

export default App;
