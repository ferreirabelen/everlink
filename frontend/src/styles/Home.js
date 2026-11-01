
import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 5% 5rem;
`;

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 4rem 0 3rem;
`;

export const Eyebrow = styled.span`
  color: ${({ theme }) => theme.colors.contraste};
  background-color: ${({ theme }) => theme.colors.sage};
  padding: 0.45rem 1rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
`;

export const Title = styled.h1`
  max-width: 850px;
  color: ${({ theme }) => theme.colors.contraste};
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.045em;
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.naranja};
  font-style: italic;
`;

export const Description = styled.p`
  max-width: 520px;
  color: ${({ theme }) => theme.colors.contraste};
  font-size: 1.05rem;
  line-height: 1.8;
`;
