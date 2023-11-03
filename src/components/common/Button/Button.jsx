import React from 'react'
import { StyleButton } from './button.styles'

const Button = ({texto, tipo, func}) => {
  return (
    <StyleButton type={tipo} onClick={func}>{texto}</StyleButton>
  )
}

export default Button