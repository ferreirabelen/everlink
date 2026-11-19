
import styled from "styled-components";

export const SearchCard = styled.section`
    width: 100%;
    max-width: 750px;
    margin: 1rem auto 3rem;
    padding: 2.5rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 28px;
    box-shadow: 0 12px 35px rgba(41, 77, 59, 0.08);

    @media (max-width: 600px) {
        padding: 1.75rem 1.25rem;
        margin: 0 auto 2rem;
        border-radius: 22px;
    }

    @media (max-width: 380px) {
        padding: 1.5rem 1rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    @media (max-width: 600px) {
        gap: 1rem;
    }
`;

export const FormTitle = styled.h2`
    color: ${({ theme }) => theme.colors.contraste};
    font-family: "Fraunces", serif;
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;

    @media (max-width: 600px) {
        font-size: 1.65rem;
        margin-bottom: 0;
    }

    @media (max-width: 380px) {
        font-size: 1.45rem;
    }
`;

export const FormDescription = styled.p`
    color: ${({ theme }) => theme.colors.contraste};
    opacity: 0.60;
    font-size: 0.95rem;
    line-height: 1.6;

    @media (max-width: 600px) {
        font-size: 0.85rem;
        line-height: 1.5;
    }
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.contraste};
    font-size: 0.9rem;
    font-weight: 700;

    @media (max-width: 600px) {
        font-size: 0.85rem;
    }
`;

export const Input = styled.input`
    width: 100%;
    min-width: 0;
    padding: 0.95rem 1rem;
    border: 1.5px solid ${({ theme }) => theme.colors.sage};
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.cream};
    color: ${({ theme }) => theme.colors.contraste};
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &::placeholder {
        color: ${({ theme }) => theme.colors.contraste};
        opacity: 0.5;
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.naranja};
        box-shadow: 0 0 0 3px rgba(215, 139, 82, 0.15);
    }

    @media (max-width: 600px) {
        padding: 0.85rem 0.9rem;
        font-size: 0.95rem;
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    margin-top: 0.5rem;
    padding: 1rem;
    border: none;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.contraste};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease;

    &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.naranja};
        transform: translateY(-2px);
    }

    &:focus-visible {
        outline: 3px solid ${({ theme }) => theme.colors.naranja};
        outline-offset: 3px;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }

    @media (max-width: 600px) {
        padding: 0.9rem;
        font-size: 0.95rem;
    }

    @media (hover: none) {
        &:hover:not(:disabled) {
            background-color: ${({ theme }) => theme.colors.contraste};
            transform: none;
        }
    }
`;

export const ErrorMessage = styled.p`
    margin-top: 1rem;
    color: #b54747;
    font-size: 0.9rem;
    font-weight: 600;

    @media (max-width: 600px) {
        font-size: 0.85rem;
    }
`;


// RESULTADOS DE LA BÚSQUEDA

export const Results = styled.section`
    width: 100%;
    max-width: 900px;
    margin: 3rem auto;
    padding: 2.5rem;
    border-radius: 28px;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.contraste};
    box-shadow: 0 12px 35px rgba(41, 77, 59, 0.06);

    @media (max-width: 600px) {
        margin: 2rem auto;
        padding: 1.5rem 1.1rem;
        border-radius: 22px;
    }

    @media (max-width: 380px) {
        padding: 1.25rem 0.9rem;
    }
`;

export const ResultsHeader = styled.div`
    margin-bottom: 2rem;

    p {
        line-height: 1.6;
        font-size: 0.95rem;
    }

    @media (max-width: 600px) {
        margin-bottom: 1.5rem;

        p {
            font-size: 0.85rem;
        }
    }
`;

export const ResultsTitle = styled.h2`
    color: ${({ theme }) => theme.colors.contraste};
    font-family: "Fraunces", serif;
    font-size: 2rem;
    margin-bottom: 0.5rem;

    @media (max-width: 600px) {
        font-size: 1.6rem;
    }

    @media (max-width: 380px) {
        font-size: 1.4rem;
    }
`;

export const ResultsCount = styled.p`
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.cream};
    color: ${({ theme }) => theme.colors.contraste};
    font-size: 0.85rem;
    font-weight: 700;

    @media (max-width: 600px) {
        font-size: 0.75rem;
        padding: 0.45rem 0.8rem;
    }
`;

export const Span = styled.span`
    display: inline-block;
    color: ${({ theme }) => theme.colors.naranja};
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 0.5rem;

    @media (max-width: 600px) {
        font-size: 0.65rem;
        letter-spacing: 0.1em;
    }
`;


// GRILLA DE CANCIONES

export const SongGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fit,
        minmax(min(100%, 190px), 1fr)
    );
    gap: 1.1rem;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        gap: 0.85rem;
    }
`;

export const SongCard = styled.article`
    min-height: 140px;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 18px;
    background-color: ${({ theme }) => theme.colors.coral};
    transition: transform 0.25s ease, box-shadow 0.25s ease;

    &:hover {
        transform: translateY(-4px) rotate(-1deg);
        box-shadow: 0 8px 18px rgba(41, 77, 59, 0.12);
    }

    &:nth-child(3n + 2) {
        background-color: ${({ theme }) => theme.colors.sage};
    }

    &:nth-child(3n) {
        background-color: ${({ theme }) => theme.colors.lavender};
    }

    @media (max-width: 600px) {
        min-height: 125px;
        padding: 1.1rem;
        border-radius: 16px;

        &:hover {
            transform: none;
            box-shadow: none;
        }
    }
`;

export const SongCardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SongSticker = styled.span`
    color: ${({ theme }) => theme.colors.contraste};
    font-size: 1.25rem;
    opacity: 0.8;
`;

export const SongNumber = styled.span`
    color: ${({ theme }) => theme.colors.contraste};
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    opacity: 0.65;
`;

export const SongName = styled.h3`
    color: ${({ theme }) => theme.colors.contraste};
    font-family: "Fraunces", serif;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.3;
    overflow-wrap: anywhere;

    @media (max-width: 600px) {
        font-size: 1.15rem;
    }
`;

export const SongCardBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
`;

export const SongArtist = styled.span`
    color: ${({ theme }) => theme.colors.contraste};
    font-size: 0.7rem;
    font-weight: 600;
    opacity: 0.7;
    text-transform: lowercase;
`;

export const FavoriteIcon = styled.button`
    background: none;
    border: none;
    padding: 0.25rem;
    cursor: pointer;
    color: ${({ $favorito }) => $favorito ? "#E45B68" : "#fff"};
    font-size: 2.2rem;
    line-height: 1;
    opacity: 0.8;
    transition: color 0.2s ease, transform 0.2s ease;

    &:hover {
        transform: scale(1.2);
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.contraste};
        outline-offset: 3px;
        border-radius: 4px;
    }

    @media (max-width: 600px) {
        font-size: 2rem;
        min-width: 40px;
        min-height: 40px;
    }

    @media (hover: none) {
        &:hover {
            transform: none;
        }
    }
`;


// ESTADO SIN RESULTADOS

export const EmptyState = styled.div`
    padding: 3rem 1.5rem;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.cream};
    text-align: center;

    h3 {
        color: ${({ theme }) => theme.colors.contraste};
        font-family: "Fraunces", serif;
        font-size: 1.6rem;
        margin-bottom: 0.75rem;
    }

    p {
        color: ${({ theme }) => theme.colors.contraste};
        opacity: 0.7;
        font-size: 0.95rem;
        line-height: 1.6;
        max-width: 420px;
        margin: 0 auto;
    }

    @media (max-width: 600px) {
        padding: 2rem 1rem;
        border-radius: 16px;

        h3 {
            font-size: 1.35rem;
        }

        p {
            font-size: 0.85rem;
        }
    }
`;

