import './productCard.css';

import { Link } from 'react-router-dom';



function ProductCard({product, cart, setCart, wishlist, setWishlist}){
  
 

  

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  const addToWishlist = () => {
    if (isWishlisted) {
      setWishlist(
        wishlist.filter((item) => item.id !== product.id)
      );
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const addToCart = async () => {
    
    console.log(product);
    
    const token = localStorage.getItem("token");

console.log("Token:", token);

const response = await fetch("http://localhost:8081/cart", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token
  },
  body: JSON.stringify({
    productName: product.title,
    price: product.price,
    image: product.image,
    quantity: 1,
    userEmail: "vignesh@gmail.com"
  })
});

console.log("Status:", response.status);



  const existingItem = cart.find(
    (item) => item.id === product.id
  );

  if (existingItem) {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCart([
      ...cart,
      {
        ...product,
        quantity: 1,
      },
    ]);
  }
};

    
    return(

         <div className="card h-100">

  <Link to={`/product/${product.id}`}>
  <p>{product.image}</p>
    <img
      src={`/images/${product.image}`}
      className="img-fluid rounded mt-4"
      alt={product.title}
      style={{width: '350px', height: '200px', objectFit: 'contain'}}
    />
  </Link>

  <div className="card-body text-center">

    <h5>
      <Link
        to={`/product/${product.id}`}
        className="text-decoration-none text-dark"
      >
        {product.title}
      </Link>
    </h5>

    <h4 className="text-success">
      ₹{product.price}
    </h4>
  
  <p className='text-warning'>
    ⭐{product.rating}
  </p>

<button
  className={`btn w-100 mb-2 ${
    isWishlisted
      ? "btn-danger"
      : "btn-outline-danger"
  }`}
  onClick={addToWishlist}
>
  {isWishlisted ? "❤️ Wishlisted" : "🤍 Wishlist"}
</button>

    <button
      className="btn btn-primary w-100"
      onClick={addToCart}
    >
      Add to Cart
    </button>


  </div>
</div>

    );
}

export default ProductCard;