import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart }) {

  const navigate = useNavigate();

  

  useEffect(() => {
 
    const fetchCart = async () => {      
      try {
        const token = localStorage.getItem("token");

      const response = await fetch(
  "http://localhost:8081/cart/vignesh@gmail.com",
  
  {
    
    
    headers: {
      Authorization: "Bearer " + token,
    },
  }
);




if (!response.ok) {
  console.log("Fetch cart failed");
  return;
}

const data = await response.json();


setCart(data)
      } catch (err) {
        console.log(err);
      }
    };

    fetchCart();

  }, [setCart]);


  const removeFromCart = async (id) => {

  const token = localStorage.getItem("token");

  const response = await fetch(
    `http://localhost:8081/cart/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  if (response.ok) {
    setCart(cart.filter((item) => item.id !== id));
  } else {
    console.log("Delete Failed");
  }
};  
 

  const increaseQuantity = async (id) => {

  const token = localStorage.getItem("token");

  const item = cart.find((i) => i.id === id);

  const newQuantity = item.quantity + 1;

  await fetch(
    `http://localhost:8081/cart/${id}/${newQuantity}`,
    {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  setCart(
    cart.map((item) =>
      item.id === id
        ? { ...item, quantity: newQuantity }
        : item
    )
  );
};


  const decreaseQuantity = async (id) => {

  const token = localStorage.getItem("token");

  const item = cart.find((i) => i.id === id);

  if (item.quantity === 1) {
    removeFromCart(id);
    return;
  }

  const newQuantity = item.quantity - 1;

  await fetch(
    `http://localhost:8081/cart/${id}/${newQuantity}`,
    {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  setCart(
    cart.map((item) =>
      item.id === id
        ? { ...item, quantity: newQuantity }
        : item
    )
  );
};


  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Shopping Cart</h2>
      <h1>cart count: {cart.length}</h1>
      {cart.length === 0 ? (
        <h4>Your cart is empty 😔</h4>
      ) : (
        <>
          <div className="row">
            {cart.map((item) => (
              <div className="col-md-3 mb-4" key={item.id}>
                <div className="card h-100">
                  <img
                    src={`/images/${item.image}`}
                    alt={item.productName}
                    className="card-img-top"
                    style={{
                      height: "200px",
                      objectFit: "contain",
                    }}
                  />

                  <div className="card-body text-center">
                    <h5>{item.productName}</h5>

                    <h4 className="text-success">
                      ₹{item.price}
                    </h4>

                    <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="btn btn-danger w-100"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

         <hr />

<div className="d-flex justify-content-between align-items-center mt-4">
  <h2>Total : ₹{totalAmount}</h2>

  <button
    className="btn btn-success"
    onClick={() => navigate("/checkout")}
  >
    Checkout
  </button>
</div>
        </>
      )}
    </div>
  );
}

export default Cart;