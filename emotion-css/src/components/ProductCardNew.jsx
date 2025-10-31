"use client"
import Image from "next/image";
import styled from '@emotion/styled';

const UnstyledProductCardNew = ({productName, ...props}) => {
  return (
    <div {...props}>
      <Image
        src="./placeholder.jpg"
        alt="Product Image"
        width={300}
        height={200}
        priority
      />
      <div className="card-content">
        <div className="title">{productName}</div>
        <div className="buy-button">Buy Now</div>
      </div>
    </div>
  );
}

// to display CSS highlighting use VS code addon: vscode-styled-components
const ProductCardNew = styled(UnstyledProductCardNew)`
  max-width: 300px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  background: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .card-content {
    padding: 16px;
    flex: 1;
  }
  .title{
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 16px;
  }
  .buy-button{
    width: 100%;
    background: var(--primary-main);
    color: var(--primary-contrastText);
    border: none;
    border-radius: 4px;
    padding: 10px 0;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    margin-top: 8px;
    transition: background 0.2s;
    text-align: center;

    &:hover {
      background: var(--primary-light);
    }
  }
`;

export default ProductCardNew;
