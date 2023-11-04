import styled from "styled-components";

export const StylesModal = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 9;
  background: rgba(38, 50, 56, 0.6);
`;

export const StylesContentModal = styled.div`
  display: flex;
  width: 400px;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  flex-shrink: 0;
  border-radius: 16px;
  background: ${(p) => p.theme.orangeRent};
  box-shadow: 4px 7px 21px 0px #263238, -4px -7px 21px 0px #263238;

  input{
    padding: 10px;
    border-radius: 8px;
    text-align: center;
  }

  label {
    font-size: 16px;
    color: ${(p) => p.theme.white};
    font-weight: 600;
    background-color: ${(p) => p.theme.blackOpacidade};
    width: 50%;
    border-radius: 16px;
  }

  button {
    background-color: ${(p) => p.theme.verdeRent};
  }
`;