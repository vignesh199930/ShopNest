import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8081/products")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === Number(id));
        setProduct(found);
      });
  }, [id]);

  if (!product) {
    return <h2 className="text-center mt-5">Product Not Found</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`/images/${product.image}`}
            alt={product.title}
            className="img-fluid"
            style={{ maxWidth: "350px", maxHeight: "350px", objectFit: "contain" }}
          />
        </div>

        <div className="col-md-6">
          <h2>{product.title}</h2>
          <h3 className="text-success">₹ {product.price}</h3>
          <h5>Category: {product.category}</h5>
          <p>This is a premium quality product with excellent performance.</p>

          <button className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;