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
`