
import styled from "styled-components";

export const SearchCard = styled.section`
  width: 100%;
  max-width: 750px;
  margin: 1rem auto 3rem;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 28px;
  box-shadow: 0 12px 35px rgba(41, 77, 59, 0.08);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormTitle = styled.h2`
  color: ${({ theme }) => theme.colors.contraste};
  font-family: "Fraunces", serif;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const FormDescription = styled.p`
  color: ${({ theme }) => theme.colors.contraste};
  opacity: 0.60;
  font-size: 0.95rem;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.contraste};
  font-size: 0.9rem;
  font-weight: 700;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.95rem 1rem;
  border: 1.5px solid ${({ theme }) => theme.colors.sage};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.contraste};
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
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
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
`;

export const ErrorMessage = styled.p`
  color: #b54747;
  font-size: 0.9rem;
  font-weight: 600;
`;


// resultados de la busqueda
export const Results = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 3rem auto;
  padding: 2rem;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.contraste};
`;

export const ResultsHeader = styled.div`
  margin-bottom: 1.25rem;
`;

export const Span = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.naranja};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export const ResultsTitle = styled.h2`
  color: ${({ theme }) => theme.colors.contraste};
  font-family: "Fraunces", serif;
  font-size: 1.7rem;
`;

export const SongGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.85rem;
`;

export const SongCard = styled.article`
  min-height: 90px;
  padding: 1.1rem;
  display: flex;
  align-items: center;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.naranja};
  border: 1px solid transparent;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.coral};
  }

  &:nth-child(3n + 2) {
    background-color: ${({ theme }) => theme.colors.sage};
  }

  &:nth-child(3n) {
    background-color: ${({ theme }) => theme.colors.lavender};
  }
`;

export const SongName = styled.h3`
  color: ${({ theme }) => theme.colors.contraste};
  font-family: "Fraunces", serif;
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.3;
`;

