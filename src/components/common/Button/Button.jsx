import React from 'react'
import { StyleButton } from './button.styles'

const Button = ({classe, texto, tipo, func}) => {
  return (
    <StyleButton className={classe} type={tipo} onClick={func}>{texto}</StyleButton>
  )
}

export default Button