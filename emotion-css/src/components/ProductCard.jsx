"use client"
import Image from "next/image";
import styled from '@emotion/styled';

// Styled components with Emotion
const Card = styled.div`
  max-width: 300px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  background: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const CardContent = styled.div`
  padding: 16px;
  flex: 1;
`;

const Title = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 16px;
`;

const BuyButton = styled.button`
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
`;

export default function ProductCard({productName}) {
  return (
    <Card>
      <Image
        src="./placeholder.jpg"
        alt="Product Image"
        width={300}
        height={200}
        priority
      />
      <CardContent>
        <Title>{productName}</Title>
        <BuyButton>Buy Now</BuyButton>
      </CardContent>
    </Card>
  );
}
