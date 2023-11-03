import styled from "styled-components";


export const StyleButton = styled.button`
    width: 30%;
    height: 35px;
    border: 2px solid ${(props)=>props.theme.orangeRent};
    border-radius: 5px;
    background-color: ${(props)=>props.theme.orangeRent};
    color: ${(props)=>props.theme.white};
    font-size: 16px;
    font-weight: 800;
    outline: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: ${(props)=>props.theme.white};
        color: ${(props)=>props.theme.orangeRent};
    }


`