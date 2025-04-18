import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { HomePageWrapper,CardWrapper } from "./Home.style";
import { Link } from "react-router";


function Home() {
  const [data, error, loading] = useFetch("https://fakestoreapi.com/products");

  if (error) return <div> Error</div>;
  if (loading) return <div> Loading...</div>;

  return (
    <HomePageWrapper>
      <h2>Products</h2>
      <CardWrapper>
        {data &&
          data.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="title">
                <Link to={`/products/${item.id}`}>
                  <h3>{item.title}</h3>
                </Link>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
      </CardWrapper>
    </HomePageWrapper>
  );
}

export default Home;
