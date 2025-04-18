import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link, useParams } from "react-router";
import { ProductPageWrapper, ProductWrapper } from "./Product.style";

function Product() {
    const {id}=useParams()
  const [data, error, loading] = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  if (error) return <div> Error</div>;
  if (loading) return <div> Loading...</div>;
console.log(data);

  return (
    <ProductPageWrapper>
      <h2>Product</h2>

      <ProductWrapper>
        <div className="product" key={data.id}>
          <img src={data.image} alt={data.title} />
          <div className="info">
            <div className="brand">
              <p>{data.category}</p>
            </div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <div className="info-bottom">
              <p>
                Rating: {data.rating.rate} / 5 ({data.rating.count} reviews)
              </p>
              <p>
                {" "}
                <span>${data.price}</span>
              </p>
            </div>
          </div>
        </div>
      </ProductWrapper>
    </ProductPageWrapper>
  );
}

export default Product;
