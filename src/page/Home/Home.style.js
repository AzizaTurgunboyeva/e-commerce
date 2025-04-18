import styled from "styled-components";

export const HomePageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2px;
  min-height: 100vh;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;

  .card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    img {
      width: 120px;
      height: 120px;
      object-fit: contain;
      margin-bottom: 1rem;
    }
    a{
      text-decoration: none;
    }

    h3 {
      font-size: 1rem;
      margin: 0.5rem 0;
      color: #333;
      text-decoration: none;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    p {
      font-weight: bold;
      color: #379f49;
      margin: 0.25rem 0;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
