import styled from "styled-components";



export const StyleHeader = styled.header`
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px 0px;
    background-color: ${(props)=>props.theme.black};
    color: ${(props)=>props.theme.white};

    .titulo{
        cursor: pointer;
    }

    .titulo span {
        color: ${(props)=>props.theme.orangeRent};
    }

    .lista {
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 24px;
    }

    .item {
        font-size: 24px;
        cursor: pointer;
    }

    .item:hover{
        color: ${(props)=>props.theme.orangeRent};
    }
`