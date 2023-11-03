import React from 'react'
import { StyleForm } from './form.styles'
import Field from '../../common/Field/Field'
import Button from '../../common/Button/Button'
const Form = () => {
  return (
    <StyleForm>
        <h2>CRUD de veículos</h2>
        <h3>Adicionar novo veículo</h3>
        <Field nomeInput={"locadora"} textoLabel={"Locadora:"} textoInput={"Locadora"}/>
        <Field nomeInput={"modelo"} textoLabel={"Modelo:"} textoInput={"Modelo"}/>
        <Field nomeInput={"marca"} textoLabel={"Marca:"} textoInput={"Marca"}/>
        <Field nomeInput={"ano"} tipo={'number'} valorMinimo={1998} textoLabel={"Ano:"} textoInput={"Ano"}/>
        <Field nomeInput={"motor"} textoLabel={"Motor:"} textoInput={"Motor"}/>
        <Field nomeInput={"portas"} tipo={'number'} valorMaximo={4} valorMinimo={2}  textoLabel={"Portas:"} textoInput={"Portas"}/>
        <Field nomeInput={"cambio"} textoLabel={"Câmbio:"} textoInput={"Câmbio"}/>
        <Field nomeInput={"locadora"} tipo={'checkbox'} textoLabel={"Ar condicionado"} textoInput={"Locadora"} classe={'checkbox'}/>
        <Button texto={"Cadastrar"} />
    </StyleForm>
  )
}

export default Form