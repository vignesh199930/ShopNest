import ProductCard from "./productCard";

import { useEffect, useState } from "react";

function FeaturedProducts({ search, category, cart, setCart, sort, wishlist, setWishlist,}) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
  fetch('http://localhost:8081/products')
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
    })
    .catch((err) => console.log("Fetch error:", err));
}, []);
    
  
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes((search ?? "").toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });


  const sortedProducts = [...filteredProducts];
  if(sort ==='low'){
    sortedProducts.sort((a, b)=>
      a.price - b.price
    )
  }
  if(sort ==='high'){
    sortedProducts.sort((a, b)=>
      b.price - a.price
    )
  }
  if(sort ==='az'){
    sortedProducts.sort((a, b)=>
     a.title.localeCompare(b.title)
    )
  }
  if(sort ==='za'){
    sortedProducts.sort((a, b)=>
      b.title.localeCompare(a.title)
    )
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center">Featured Products</h2>
      

      <div className="row">
        {sortedProducts.map((product) => (
          <div key={product.id} className="col-md-3 mb-5">
            <ProductCard
              image={`/product/${product.id}`} 
              product={product}
              cart={cart}
              setCart={setCart}
              wishlist={wishlist}
              setWishlist={setWishlist}
              sort={sort}

              
            />
          </div>
        ))}
      </div>
    </div>
    
  );
}




export default FeaturedProducts;