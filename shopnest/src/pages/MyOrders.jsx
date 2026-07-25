import { useEffect, useState } from "react";

function MyOrders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        const email = localStorage.getItem("email");

        fetch(`http://localhost:8081/orders/user/${email}`)
        .then(res => res.json())
        .then(data => setOrders(data));

    }, []);

     const cancelOrder = async (id) => {

    await fetch(`http://localhost:8081/orders/cancel/${id}`,{
        method:"PUT"
    });

    window.location.reload();

}

    return (

        <div className="container mt-4">

            <h2>My Orders</h2>

             

            {orders.map(order => (
                    
         console.log("ORDERS:", orders);
                    <div className="card mb-3 p-3" key={order.id}>

                        <img
                        src={`/images/${order.image}`}
                        width="150"
                        alt=""
                        />

                        <h4>{order.productName}</h4>

                        <p>Price : ₹{order.price}</p>

                        <p>Quantity : {order.quantity}</p>

                        <p>Total : ₹{order.price * order.quantity}</p>

                        <p>{order.orderDate}</p>

                        <p>status : {order.status}</p>

                       <button
                    style={{ backgroundColor: "red", color: "white", padding: "10px" }}
                    onClick={() => cancelOrder(order.id)}
                     >
                     Cancel Order
                     </button>

                    </div>

                ))
            }

        </div>

    );

}

export default MyOrders;