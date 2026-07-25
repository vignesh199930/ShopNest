function Wishlist({ wishlist, setWishlist }) {

  const removeFromWishlist = (id) => {
   setWishlist(
    wishlist.filter((item)=>
    
      item.id !== id)
    
    )
  }

  return (
    <div className="container mt-5">
      <h2>My Wishlist</h2>

      {wishlist.map((item) => (
        <div key={item.id} className="card p-3 mb-3">
          <img
            src={`/images/${item.image}`}
            alt={item.title}
            width="120"
          />

          <h5>{item.title}</h5>
          <p>₹{item.price}</p>

          <button
            className="btn btn-danger"

            style={{width:"120px"}} 

            onClick={() => removeFromWishlist(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;