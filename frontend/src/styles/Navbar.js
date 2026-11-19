
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

    @media (max-width: 600px) {
        padding: 0.85rem 5%;
    }
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

    @media (max-width: 600px) {
        font-size: 1.7rem;
    }
`;

export const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 600px) {
        display: none;
    }
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

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.coral};
        outline-offset: 5px;
        border-radius: 3px;
    }
`;

export const MenuButton = styled.button`
    display: none;
    width: 42px;
    height: 42px;
    padding: 9px;
    border: none;
    background: transparent;
    cursor: pointer;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    span {
        display: block;
        width: 24px;
        height: 2px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.cream};
        transition: transform 0.25s ease, opacity 0.2s ease;
    }

    ${({ $abierto }) =>
        $abierto &&
        `
            span:first-child {
                transform: translateY(7px) rotate(45deg);
            }

            span:nth-child(2) {
                opacity: 0;
            }

            span:last-child {
                transform: translateY(-7px) rotate(-45deg);
            }
        `
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.coral};
        outline-offset: 3px;
        border-radius: 8px;
    }

    @media (max-width: 600px) {
        display: flex;
    }
`;

export const MobileMenu = styled.div`
    display: none;

    @media (max-width: 600px) {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        padding: 1.5rem 5% 1.75rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        background-color: ${({ theme }) => theme.colors.contraste};
        box-shadow: 0 8px 12px rgba(41, 77, 59, 0.12);

        a {
            font-size: 1rem;
            padding: 0.35rem 0;
        }
    }
`;
