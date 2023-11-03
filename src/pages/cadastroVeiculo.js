import styled from "styled-components";



export const StyleCadastroVeiculo = styled.div`
    height: 100vh;
.section-form {
    height: 84%;
    background-image: url(/imagemBackground.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
}

.section-veiculos {
    height: 100%;
    background-color: ${(props)=>props.theme.black};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.seta {
    color: ${(props)=>props.theme.orangeRent};
    
}

.seta:hover {
    color: ${(props)=>props.theme.white};
}

    
`