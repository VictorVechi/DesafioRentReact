import React, { useState } from 'react'
import { StyleVeiculo } from './veiculo.style'
import Button from '../../common/Button/Button'
import { deleteVeiculo, getVeiculoPorId, putVeiculo } from '../../../services/api'
import Modal from '../../common/Modal/Modal'
import Field from '../../common/Field/Field'

const Veiculo = ({id, locadora, modelo, marca, ano, motor, portas, cambio, ar_condicionado}) => {
    const [notificacao, setNotificacao] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const arCondicionado = ar_condicionado? 'sim':'não'

    const [locadoraModal, setLocadoraModal] = useState('')
    const [modeloModal, setModeloModal] = useState('')
    const [marcaModal, setMarcaModal] = useState('')
    const [anoModal, setAnoModal] = useState(1998)
    const [motorModal, setMotorModal] = useState('')
    const [portasModal, setPortasModal] = useState(2)
    const [cambioModal, setCambioModal] = useState('')
    const [arCondicionadoModal, setArCondicionadoModal] = useState(false)


    const deletarVeiculo = async ()=>{
        const response = await deleteVeiculo(id)
        setNotificacao(true)
        setTimeout(()=>{setNotificacao(false)}, 2000)
        location.reload()
    }

    const modalEditarVeiculo = async ()=>{
        const responseVeiculo = await getVeiculoPorId(id)
        setLocadoraModal(responseVeiculo.locadora)
        setModeloModal(responseVeiculo.modelo)
        setMarcaModal(responseVeiculo.marca)
        setAnoModal(responseVeiculo.ano)
        setMotorModal(responseVeiculo.motor)
        setPortasModal(responseVeiculo.portas)
        setCambioModal(responseVeiculo.cambio)
        setArCondicionadoModal(responseVeiculo.ar_condicionado)
        setModalOpen(true)
    }

    const handleAtualizaVeiculo = async (e)=>{
        e.preventDefault()
        const data = {
            locadora: locadoraModal,
            modelo: modeloModal,
            marca: marcaModal,
            ano: anoModal,
            motor: motorModal,
            portas: portasModal,
            cambio: cambioModal,
            ar_condicionado: arCondicionadoModal
        }
        const response = await putVeiculo(id, data)
        setModalOpen(false)
        location.reload()
    }

  return (
    <>
        <StyleVeiculo>
            <li>{locadora}</li>
            <li>{modelo}</li>
            <li>{marca}</li>
            <li>{ano}</li>
            <li>{motor}</li>
            <li>{portas}</li>
            <li>{cambio}</li>
            <li>{arCondicionado}</li>
            <li><Button classe={'edicao'} texto={'Editar'} func={(e)=>{modalEditarVeiculo()}} /></li>
            <li><Button classe={'delete'} texto={'Deletar'} func={()=>{deletarVeiculo()}} /></li>
            {notificacao && <p >Deletado</p>}
        </StyleVeiculo>
        <Modal open={modalOpen} fechaModal={()=>{setModalOpen(false)}}>
            <Field value={locadoraModal} nomeInput={"locadora"} textoLabel={"Locadora:"} textoInput={"Locadora"} func={(e)=>setLocadoraModal(e.target.value)}/>
            <Field value={modeloModal} nomeInput={"modelo"} textoLabel={"Modelo:"} textoInput={"Modelo"} func={(e)=>setModeloModal(e.target.value)}/>
            <Field value={marcaModal} nomeInput={"marca"} textoLabel={"Marca:"} textoInput={"Marca"} func={(e)=>setMarcaModal(e.target.value)}/>
            <Field value={anoModal} nomeInput={"ano"} tipo={'number'} valorMinimo={1998} textoLabel={"Ano:"} textoInput={"Ano"} func={(e)=>setAnoModal(e.target.value)}/>
            <Field value={motorModal} nomeInput={"motor"} textoLabel={"Motor:"} textoInput={"Motor"} func={(e)=>setMotorModal(e.target.value)}/>
            <Field value={portasModal} nomeInput={"portas"} tipo={'number'} valorMaximo={4} valorMinimo={2}  textoLabel={"Portas:"} textoInput={"Portas"} func={(e)=>setPortasModal(e.target.value)}/>
            <Field value={cambioModal} nomeInput={"cambio"} textoLabel={"Câmbio:"} textoInput={"Câmbio"} func={(e)=>setCambioModal(e.target.value)}/>
            <Field value={arCondicionadoModal} check={arCondicionadoModal} tipo={'checkbox'} textoLabel={"Ar condicionado"} textoInput={"Locadora"} func={(e)=>setArCondicionadoModal(e.target.checked)}/>
            <Button texto={"Atualizar"} func={(e)=>{handleAtualizaVeiculo(e)}} />
        </Modal>
    </>
  )
}

export default Veiculo