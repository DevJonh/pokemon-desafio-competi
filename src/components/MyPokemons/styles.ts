import styled from "styled-components";

interface IStylesProps {
  color?: string;
  text?: string;
}

export const Container = styled.table`
  width: 100%;
  padding: 1rem 1.25rem;

  thead tr {
    display: grid;
    grid-template-columns: 5.7rem 15rem 1fr 7rem;

    th {
      font-weight: 500;
      color: #535662;
      &:nth-child(3) {
        text-align: left;
        margin-left: 1rem;
      }
    }
  }

  tbody {
    tr {
      display: grid;
      grid-template-columns: 5.7rem 15rem 1fr 6rem;
      column-gap: 2rem;
      margin-top: 1rem;
      height: 5.8rem;
      padding: 0.56rem;
      background-color: #fff;
      align-items: center;
      border-radius: 0.5rem;
    }
  }

  td {
    display: flex;
    justify-content: space-between;
    color: #535662;
    font-weight: 500;
    font-size: 1.3rem;
    button {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin: 0;

      &:nth-child(1) {
        transition: 0.4s;
        background-color: #49dbdf;
      }
      &:nth-child(2) {
        transition: 0.4s;
        background-color: #f25d52;
      }

      &:nth-child(1):hover {
        background-color: #1fb7bb;
      }
      &:nth-child(2):hover {
        background-color: #d22d21;
      }
    }
    div {
      width: 5rem;
      height: 4.8rem;
      background-color: #b4adbe;
      border: 2px solid #000;
      border-radius: 0.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 90%;
      }
    }

    p:first-child:first-letter {
      text-transform: uppercase;
    }
  }

  @media only screen and (max-width: 850px) {
    width: 95%;
    margin: 0 auto;

    thead tr {
      display: grid;
      grid-template-columns: 5.7rem 15rem 1fr 7rem;
    }
    tbody {
      tr {
        grid-template-columns: 5.7rem 12rem 1fr 6rem;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    width: 80%;
    padding: 1rem 0;
    margin: 0 auto;
    thead tr {
      display: grid;
      grid-template-columns: 5.7rem 12rem 1fr 7rem;
    }
    tbody {
      tr {
        grid-template-columns: 5.7rem 8rem 1fr 6rem;
      }
    }
  }
  @media only screen and (max-width: 280px) {
    width: 70%;
    padding: 1rem 0;
    margin: 0 auto;
    thead tr {
      display: grid;
      grid-template-columns: 5.7rem 10rem 1fr 9rem;
    }
    tbody {
      tr {
        grid-template-columns: 5.7rem 6rem 1fr 6rem;
      }
    }
  }
`;

export const Type = styled.span<IStylesProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 100%;
  width: 4.3rem;
  height: 1.8rem;
  text-align: center;
  padding: 6px 0.5rem;
  border-radius: 0.3rem;
  font-size: 0.9rem;
  color: #fff;
  font-weight: normal;
  letter-spacing: 0.1rem;

  background-color: ${({ color }) => color};
  color: ${({ text }) => text};
`;
