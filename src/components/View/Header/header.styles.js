import styled from "styled-components";



export const StyleHeader = styled.header`
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 30px 0px;
    background-color: ${(props)=>props.theme.black};
    color: ${(props)=>props.theme.white};

    .titulo{
        cursor: pointer;
        transition: 0.3s;
    }

    .titulo span {
        color: ${(props)=>props.theme.orangeRent};
        transition: 0.3s;
    }
    .titulo:hover {
        color: ${(props)=>props.theme.orangeRent};
        span {
            color: ${(props)=>props.theme.white};
        }
    }

    @media (max-width: 768px) {
        .titulo {
            display: none;
        }
    }
`