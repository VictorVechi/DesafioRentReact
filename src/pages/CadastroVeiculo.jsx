import React from 'react'
import { StyleCadastroVeiculo } from './cadastroVeiculo'
import Form from '../components/View/Form/Form.jsx'
import Header from '../components/View/Header/Header.jsx'
import { CaretDown } from 'phosphor-react'
import Lista from '../components/View/Lista/Lista.jsx'

const CadastroVeiculo = () => {
  return (
    <StyleCadastroVeiculo>
        <Header/>
        <section className='section-form'>
          <Form />
        </section>
        <section className='section-veiculos'>
          <a href='#lista-veiculos'><CaretDown size={64} className='seta'/></a>
          <Lista idSection={'lista-veiculos'}/>
        </section>
    </StyleCadastroVeiculo>
  )
}

export default CadastroVeiculo