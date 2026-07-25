function OrderHistory({ orders = []}) {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">📦 My Orders</h2>
      

      {console.log(orders.item)}
      
      {orders.length === 0 ? (
        <h4>No orders found 😔</h4>
      ) : (
      
        orders.map((order) => (
          <div className="card shadow mb-4 p-3" key={order.id}>
            <h5>Order ID: {order.id}</h5>
            <p>Date: {order.date}</p>
            <p>
              <strong>Total:</strong> ₹{order.total}
            </p>

            <span className="badge bg-success mb-3">
              Order Placed
            </span>

            {order.items.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center border-top pt-3"
              >
                <img
                  src={`/images/${item.image}`}
                  alt={item.title}
                  width="80"
                  height="80"
                  style={{ objectFit: "contain" }}
                />

                <div className="ms-3">
                  <h6>{item.title}</h6>
                  <p>₹{item.price}</p>
                  <p>Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default OrderHistory;