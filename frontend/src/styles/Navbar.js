import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  padding: 1.25rem 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  font-family: "Fraunces", serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.contraste};
`;

export const NavLink = styled(Link)`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.contraste};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

