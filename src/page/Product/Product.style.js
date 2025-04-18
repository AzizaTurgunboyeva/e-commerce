// Product.style.js
import styled from "styled-components";

export const ProductPageWrapper = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  .product {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    max-width: 800px;
  }

  img {
    width: 300px;
    object-fit: contain;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .brand {
      width: 150px;
      text-align: center;
      border: 1px dotted rgb(56, 134, 178);
      border-radius: 8px;
      background-color: rgb(132, 199, 238);
      color: #666;
    }

    h3 {
      margin: 0.5rem 0;
    }

    p {
      margin: 0.5rem 0;
      line-height: 1.4;
    }

    .info-bottom {
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      p {
        color: rgb(213, 71, 71);
      }
      span {
        color: rgb(71, 213, 111);
      }
    }
  }
`;
