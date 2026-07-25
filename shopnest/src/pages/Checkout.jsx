import { useState } from "react";

import { useNavigate } from "react-router-dom";



function Checkout({cart, setCart, orders, setOrders}) {
    const navigate = useNavigate();

    const placeOrder = async () => {

  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:8081/orders", {

    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      fullName: name,
      email: email,
      phone: phone,
      address: address,
      productName: cart[0].productName,
      price: cart[0].price,
      quantity: cart[0].quantity,
      image: cart[0].image
    }),
  });

console.log(response.status);
console.log(await response.text());

  if (response.ok) {
    alert("Order Placed Successfully");
    setCart([]);
    navigate("/order-success");
  } else {
    alert("Order Failed");
  }
};


    

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");


  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <div className="card p-4 shadow">

        <h2 className="text-center mb-4">Checkout</h2>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          className="form-control mb-3"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <textarea
          className="form-control mb-3"
          placeholder="Address"
          rows="3"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>

        <button
          className="btn btn-success w-100"
          onClick={placeOrder}
        >
          Place Order
        </button>

      </div>
    </div>
  );
}

export default Checkout;