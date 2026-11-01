import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  padding: 1.25rem 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  font-family: "Fraunces", serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.contraste};
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const NavLink = styled.a`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.contraste};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;
