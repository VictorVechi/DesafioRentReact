import styled from "styled-components";

export const StyleForm = styled.form`
    width: 30% ;
    height: 80%;
    border: 3px solid ${(props)=>props.theme.orangeRent};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(12px);
    background-color: ${(props)=>props.theme.blackOpacidade};
    box-shadow: -4px -4px 8px 0px rgba(0, 0, 0, 0.25), 4px 4px 8px 0px rgba(0, 0, 0, 0.25);
    padding: 20px;
    h2, h3{
        color: ${(props)=>props.theme.orangeRent};
    }

    label {
        color: ${(props)=>props.theme.white};
    }


    @media (max-width: 768px) {
        width: 90%;
        height: 90%;
    }
`