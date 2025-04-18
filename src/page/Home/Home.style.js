import styled from "styled-components";

export const HomePageWrapper = styled.div`
 max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  .card {
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 8px;
    gap: 10px;
    padding: 10px;
    color: rgb(154, 155, 154);

    img {
      width: 100px;
      height: 100px;
      /* height: 100px; */
      object-fit: contain;
    }
    h3 {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      overflow: hidden;
      color: rgb(88, 90, 88);
    }
    p {
      color: rgb(55, 153, 65);
    }
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 2px;
  }
`;
