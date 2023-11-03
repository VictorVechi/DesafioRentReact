import styled from "styled-components";



export const StyleField = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;

    input {
        width: 60%;
        height: 25px;
        border: 1px solid ${(props)=>props.theme.orangeRent};
        border-radius: 5px;
        padding: 0 10px;
        background-color: ${(props)=>props.theme.blackOpacidade};
        color: ${(props)=>props.theme.white};
        font-size: 16px;
        font-weight: 500;
        outline: none;
    }  


    label {
        width: 30%;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`