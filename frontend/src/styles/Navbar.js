import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    width: 100%;
    padding: 1rem 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.colors.contraste};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    box-shadow: 0 3px 12px rgba(41, 77, 59, 0.15);
`;

export const Logo = styled(Link)`
    font-family: "Fraunces", serif;
    font-size: 1.9rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.cream};

    text-decoration: none;
    letter-spacing: -1px;

    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.04);
    }
`;

export const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

export const NavLink = styled(Link)`
    font-size: 0.95rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.cream};

    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.coral};
    }

    &.active {
        color: ${({ theme }) => theme.colors.coral};
    }
`;
