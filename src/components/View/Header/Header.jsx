import React from 'react'
import { StyleHeader } from './header.styles'

const Header = () => {
  return (
    <StyleHeader>
        <h1 className='titulo'>Desafio <span>Rent</span></h1>
        <nav>
            <ul className='lista'>
                <li className='item'>Home</li>
                <li className='item'>Ajuda</li>
                <li className='item'>Contato</li>
            </ul>
        </nav>
    </StyleHeader>
  )
}

export default Header