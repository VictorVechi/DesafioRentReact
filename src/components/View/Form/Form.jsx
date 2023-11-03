import React, { useState } from 'react'
import { StyleForm } from './form.styles'
import Field from '../../common/Field/Field'
import Button from '../../common/Button/Button'
import { postVeiculo } from '../../../services/api'
const Form = () => {
  const [locadora, setLocadora] = useState('')
  const [modelo, setModelo] = useState('')
  const [marca, setMarca] = useState('')
  const [ano, setAno] = useState(2019)
  const [motor, setMotor] = useState('')
  const [portas, setPortas] = useState(2)
  const [cambio, setCambio] = useState('')
  const [arCondicionado, setArCondicionado] = useState(false)

  const handleCadastroVeiculo = async (e)=>{
    const data = {
      locadora: locadora,
      modelo: modelo,
      marca: marca,
      ano: ano,
      motor: motor,
      portas: portas,
      cambio: cambio,
      ar_condicionado: arCondicionado
    }

    if(!locadora || !modelo || !marca || !ano || !motor || !portas || !cambio){
      e.preventDefault()
      const elemento = document.getElementsByTagName('h3')[0]
      elemento.innerHTML = 'Preencha todos os campos'
      elemento.style.color = 'red'
      return
    }

    const response = await postVeiculo(data)
  }

  return (
    <StyleForm>
        <h2>CRUD de veículos</h2>
        <h3>Adicionar novo veículo</h3>
        <Field value={locadora} nomeInput={"locadora"} textoLabel={"Locadora:"} textoInput={"Locadora"} func={(e)=>setLocadora(e.target.value)}/>
        <Field value={modelo} nomeInput={"modelo"} textoLabel={"Modelo:"} textoInput={"Modelo"} func={(e)=>setModelo(e.target.value)}/>
        <Field value={marca} nomeInput={"marca"} textoLabel={"Marca:"} textoInput={"Marca"} func={(e)=>setMarca(e.target.value)}/>
        <Field value={ano} nomeInput={"ano"} tipo={'number'} valorMinimo={1998} textoLabel={"Ano:"} textoInput={"Ano"} func={(e)=>setAno(e.target.value)}/>
        <Field value={motor} nomeInput={"motor"} textoLabel={"Motor:"} textoInput={"Motor"} func={(e)=>setMotor(e.target.value)}/>
        <Field value={portas} nomeInput={"portas"} tipo={'number'} valorMaximo={4} valorMinimo={2}  textoLabel={"Portas:"} textoInput={"Portas"} func={(e)=>setPortas(e.target.value)}/>
        <Field value={cambio} nomeInput={"cambio"} textoLabel={"Câmbio:"} textoInput={"Câmbio"} func={(e)=>setCambio(e.target.value)}/>
        <Field value={arCondicionado} tipo={'checkbox'} textoLabel={"Ar condicionado"} textoInput={"Locadora"} func={(e)=>setArCondicionado(e.target.checked)}/>
        <Button texto={"Cadastrar"} func={(e)=>{handleCadastroVeiculo(e)}} />
    </StyleForm>
  )
}

export default Form