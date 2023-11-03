import React from 'react'
import { StyleField } from './field.styles'

const Field = ({nomeInput, textoLabel, tipo, textoInput, classe,valorMaximo, valorMinimo, func}) => {
  return (
    <StyleField>
        <label htmlFor={nomeInput}>{textoLabel}</label>
        <input className={classe} min={valorMinimo} max={valorMaximo} name={nomeInput} type={tipo} placeholder={textoInput} required onChange={func}/>
    </StyleField>
  )
}

export default Field