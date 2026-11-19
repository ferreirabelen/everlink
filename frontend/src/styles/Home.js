
import styled from "styled-components";

export const PageBackground = styled.div`
    position: relative;
    isolation: isolate;
    min-height: 100vh;
    width: 100%;
    overflow-x: clip;
    background-color: ${({ theme }) => theme.colors.cream};

    background-image:
        radial-gradient(
            ellipse 420px 340px at 100% 8%,
            rgba(217, 165, 165, 0.48) 0 65%,
            transparent 66%
        ),
        radial-gradient(
            ellipse 300px 240px at 0% 40%,
            rgba(184, 169, 201, 0.25) 0 65%,
            transparent 66%
        ),
        radial-gradient(
            ellipse 380px 300px at 100% 70%,
            rgba(215, 139, 82, 0.16) 0 65%,
            transparent 66%
        ),
        radial-gradient(
            ellipse 350px 280px at 12% 100%,
            rgba(217, 165, 165, 0.32) 0 65%,
            transparent 66%
        ),
        radial-gradient(
            ellipse 420px 340px at 100% 8%,
            transparent 68%,
            rgba(217, 165, 165, 0.55) 68.5% 69%,
            transparent 69.5%
        );

    @media (max-width: 600px) {
        background-image:
            radial-gradient(
                ellipse 220px 180px at 100% 8%,
                rgba(217, 165, 165, 0.38) 0 65%,
                transparent 66%
            ),
            radial-gradient(
                ellipse 180px 150px at 0% 45%,
                rgba(184, 169, 201, 0.2) 0 65%,
                transparent 66%
            ),
            radial-gradient(
                ellipse 220px 180px at 100% 85%,
                rgba(215, 139, 82, 0.13) 0 65%,
                transparent 66%
            );
    }
`;

export const Main = styled.main`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 90px 5% 5rem;

    @media (max-width: 600px) {
        padding: 80px 5% 3rem;
    }
`;

export const Hero = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 1.25rem;
    padding: 4rem 0 3.5rem;

    &::before {
        content: "✳";
        position: absolute;
        top: 12%;
        right: 12%;
        color: ${({ theme }) => theme.colors.coral};
        font-size: 2.5rem;
        transform: rotate(-15deg);
        pointer-events: none;
    }

    &::after {
        content: "✧";
        position: absolute;
        bottom: 18%;
        right: 25%;
        color: ${({ theme }) => theme.colors.naranja};
        font-size: 2.2rem;
        transform: rotate(12deg);
        pointer-events: none;
    }

    @media (max-width: 600px) {
        gap: 1rem;
        padding: 3rem 0 2.5rem;

        &::before {
            top: 5%;
            right: 2%;
            font-size: 1.5rem;
        }

        &::after {
            bottom: 8%;
            right: 5%;
            font-size: 1.4rem;
        }
    }
`;

export const Eyebrow = styled.span`
    color: ${({ theme }) => theme.colors.contraste};
    background-color: ${({ theme }) => theme.colors.sage};
    padding: 0.45rem 1rem;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;

    @media (max-width: 600px) {
        font-size: 0.65rem;
        padding: 0.4rem 0.8rem;
        letter-spacing: 0.1em;
    }
`;

export const Title = styled.h1`
    max-width: 850px;
    color: ${({ theme }) => theme.colors.contraste};
    font-size: clamp(3rem, 7vw, 5.5rem);
    font-weight: 600;
    line-height: 1.05;
    letter-spacing: -0.045em;

    @media (max-width: 600px) {
        font-size: clamp(2.3rem, 10vw, 3.5rem);
        line-height: 1.1;
        letter-spacing: -0.04em;
    }
`;

export const Highlight = styled.span`
    color: ${({ theme }) => theme.colors.naranja};
    font-style: italic;
`;

export const Description = styled.p`
    max-width: 580px;
    color: ${({ theme }) => theme.colors.contraste};
    font-size: 1.05rem;
    line-height: 1.8;

    @media (max-width: 600px) {
        max-width: 100%;
        font-size: 0.9rem;
        line-height: 1.65;
    }
`;
