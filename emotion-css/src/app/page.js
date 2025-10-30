"use client"
import ProductCard from "../components/ProductCard";
import Image from "next/image";
import styled from '@emotion/styled';

export default function Home() {
  return (
    <>
      <Header>
        <Image
          src="./next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div>
          <Title>Emotion CSS, Next.js & React example</Title>
          <BodyText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magni.</BodyText>
        </div>
      </Header>
      <Main>
        <Section>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Section>
      </Main>
      <Footer>
        <BodyText>Footer Information</BodyText>
      </Footer>
    </>
  );
}
// Emotion styled components
const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: var(--primary-dark);
  color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 32px;

  img {
    filter: brightness(0) invert(1);
  }
  
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 32px auto;
  width: 100%;
`;

const Section = styled.section`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Footer = styled.footer`
  background-color: var(--primary-dark);
  color: var(--primary-contrastText);
  padding: 16px 16px 32px 16px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 8px 0;
`;

const BodyText = styled.p`
  font-size: 1rem;
  margin: 0 0 8px 0;
`;
