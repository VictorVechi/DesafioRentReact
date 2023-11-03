import React, { useEffect, useState } from 'react'
import { StyleLista } from './lista.styles'
import Veiculo from '../Veiculo/Veiculo'
import { getVeiculos } from '../../../services/api'
import Button from '../../common/Button/Button'

const Lista = ({idSection}) => {
  const [listaVeiculos, setListaVeiculos] = useState([])

  const handleBuscaVeiculos = async ()=>{
      const response = await getVeiculos()
      console.log(response)
      setListaVeiculos(response)
  }

  useEffect(()=>{
    handleBuscaVeiculos()
  }, [])
  return (
    <StyleLista id={idSection}>
        <h2>Lista de veículos</h2>
        <Button texto={'Atualizar'} classe={'atualiza-lista'} func={handleBuscaVeiculos}/>
        <ul>
          <li>Locadora</li>
          <li>Modelo</li>
          <li>Marca</li>
          <li>Ano</li>
          <li>Motor</li>
          <li>Portas</li>
          <li>Câmbio</li>
          <li>Ar condicionado</li>
          <li>Editar</li>
          <li>Deletar</li>
        </ul>
        {listaVeiculos.map((veiculo)=>(
          <Veiculo 
            key={veiculo.id} 
            id={veiculo.id}
            locadora={veiculo.locadora}
            modelo={veiculo.modelo}  
            marca={veiculo.marca}
            ano={veiculo.ano}
            motor={veiculo.motor}
            portas={veiculo.portas}
            cambio={veiculo.cambio}
            ar_condicionado={veiculo.ar_condicionado}
            setListaVeiculo={setListaVeiculos}
            />
        ))}
    </StyleLista>
  )
}

export default Lista