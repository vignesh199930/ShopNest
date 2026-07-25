import FeaturedProducts from "../components/navbar/products/FeaturedProducts.jsx";

import {useState} from 'react';
import CategoryFilter from "../components/CategoryFilter";
import {useRef, useEffect} from 'react';

function Home({cart, setCart, wishlist, setWishlist, search, setSearch}) {

    
    
    const productRef = useRef(null);

    useEffect(()=>{
        if(search.trim() !==''){
            productRef.current?.scrollIntoView
            ({
                behavior : 'smooth',
                block : 'start',
            });
        }
    },[search]);
    
    const [category, setCategory] = useState('All')

    const [sort, setSort] = useState('');

    
    return(
        <div className="container" mt-4>

           <div className="bg-primary text-white rounded p-5 text-center">

            <h1>Welcome to 🛒ShopNest</h1>

            <p>Discover the Best Deals On Electronics, Fashion & More</p>

            <button className="btn btn-warning btn-lg mt-3">
                Shop now
            </button>
           </div>
           <div className="container mt-5">
            <h2 className="text-center mb-4">Shop by Category</h2>
            
            
            <div className="row text-center">
                <div className="col-md-3">
                <div className="card p-4 shadow-sm">
                    <h3><i class="bi bi-phone"></i></h3>
                    <h5>Mobiles</h5>
                </div>

                </div>
                <div className="col-md-3">
                <div className="card p-4 shadow-sm">
                    <h3><i class="bi bi-laptop"></i></h3>
                    <h5>Laptop</h5>
                </div>

                </div>
                <div className="col-md-3">
                <div className="card p-4 shadow-sm">
                    <h3>👕</h3>
                    <h5>Fashions</h5>
                </div>

                </div>
                <div className="col-md-3">
                <div className="card p-4 shadow-sm">
                    <h3><i class="bi bi-smartwatch"></i></h3>
                    <h5>Accessories</h5>
                </div>

                </div>
            </div>

           </div>

           


           <select className="form-select w-auto"
             value={sort}
             onChange={(e)=>
                setSort(e.target.value)}>
               
               <option value=''>Sort By</option>
               <option value='low'>Price: Low to High</option>
             <option value='high'>Price: Hight to Low</option>
             <option value='az'>Name: A-Z</option>
             <option value='za'>Name: Z-A</option>

                </select>

           <CategoryFilter
           category={category}
           setCategory={setCategory}
           />
           
           <div ref={productRef}>
           <FeaturedProducts
           search={search}
           setSearch={setSearch}
           category={category}
           cart ={cart}
           setCart={setCart}
           sort={sort}
           wishlist={wishlist}
           setWishlist={setWishlist}/>

           </div>
           
        </div>

    );
}

export default Home;