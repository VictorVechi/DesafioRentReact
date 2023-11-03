import styled from "styled-components";


export const StyleLista = styled.div`
    width: 95%;
    height: 95%;
    border: 2px solid ${(props)=>props.theme.orangeRent};
    padding: 10px;
    color: ${(props)=>props.theme.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    .atualiza-lista {
        width: 20%;
    }

    ul {
        width: 85%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid ${(props)=>props.theme.orangeRent};
    }

    li {
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    

    @media (max-width: 768px) {
        gap: 5px;
        font-size: 5px;
        h2 {
            font-size: 20px;
        }
        ul {
            width: 100%;
        }

    }
`