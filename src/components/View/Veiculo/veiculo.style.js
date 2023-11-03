import styled from "styled-components";



export const StyleVeiculo = styled.ul`
    p {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Montserrat', sans-serif;
        background-color: ${(props)=>props.theme.red};
        border-radius: 10px;
    }

    button {
        width: 60%;
    }

    .edicao {
        border: none;
        background-color: ${(props)=>props.theme.verdeRent};
    }

    .delete {
        border: none;
        background-color: ${(props)=>props.theme.red};
    }
    
    .delete:hover, .edicao:hover {
        color: ${(props)=>props.theme.white};
    }

    @media (max-width: 768px) {
        button {
            font-size: 5px;
            width: 90%;
        }
    }
`