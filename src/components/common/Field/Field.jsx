import React from 'react'
import { StyleField } from './field.styles'

const Field = ({value,check, nomeInput, textoLabel, tipo, textoInput, classe,valorMaximo, valorMinimo, func}) => {
    if(tipo === 'checkbox'){
        return (
            <StyleField>
                <label htmlFor={nomeInput}>{textoLabel}</label>
                <input checked={check} value={value} className={classe} name={nomeInput} type={tipo} placeholder={textoInput} onChange={func}/>
                
            </StyleField>
          )
    }
  return (
    
    <StyleField>
        <label htmlFor={nomeInput}>{textoLabel}</label>
        <input checked={check} value={value} className={classe} min={valorMinimo} max={valorMaximo} name={nomeInput} type={tipo} placeholder={textoInput} onChange={func}/>
        
    </StyleField>
  )
}

export default Field