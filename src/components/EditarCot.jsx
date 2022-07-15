import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
function EditarCot(){
    const params = useParams()
    const[nombre, setNombre] = useState('') 
    const[origen, setOrigen] = useState('') 
    const[destino, setDestino] = useState('') 
    const[transporte, setTransporte] = useState('') 
    const[costoTotal, setCostoTotal] = useState('') 

    useEffect(()=>{
        axios.post('/api/cotizacion/obtenerDataCot', {idCot: params.idCot})
        .then(res=>{
            console.log(res.data[0])
            const dataUsuario = res.data[0]
            setNombre(dataUsuario.nombre)
            setOrigen(dataUsuario.origen)
            setDestino(dataUsuario.destino)
            setTransporte(dataUsuario.transporte)
            setCostoTotal(dataUsuario.costoTotal)
        })
    }, [])
    //  Funcion que me actualice los datos.
    function editarCotizacion(){
        //Nuevo Objeto para actualizar la cotizacion
        const actualizarCot = {
            nombre : nombre,
            origen : origen,
            destino : destino,
            transporte : transporte,
            costoTotal : costoTotal,
            idCot: params.idCot
        }
    
    //Hacer la petición usando Axios
    axios.post('/api/cotizacion/actualizarCotizacion', actualizarCot)
        .then(res =>{
            console.log(res.data)
            alert(res.data)
        })
        .then(err =>{
            console.log(err)
        })
    }    
    return(
        <div className='container'>
            <div className='row'>
                <h2 className='mt-4'>Editar cotización</h2>
            </div>            
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div className='mb-3 '>
                        <label htmlFor="nombre" className='form-label'>Nombre </label>
                        <input type="text" className='form-control' value={nombre} onChange={(e) => {setNombre(e.target.value)}} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="origen" className='form-label'>Origen</label>
                        <input type="text" className='form-control' value={origen} onChange={(e) => {setOrigen(e.target.value)}}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="destino" className='form-label'>Destino</label>
                        <input type="text" className='form-control' value={destino} onChange={(e) => {setDestino(e.target.value)}}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="transporte" className='form-label'>Transporte</label>
                        <input type="text" className='form-control' value={transporte} onChange={(e) => {setTransporte(e.target.value)}}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="costo" className='form-label'>CostoTotal</label>
                        <input type="text" className='form-control' value={costoTotal} onChange={(e) => {setCostoTotal(e.target.value)}}/>
                    </div>

                    <button onClick={editarCotizacion} className='btn btn-success'>Editar Cotización</button>                    
                </div>                
            </div>            
        </div>
    )
}

export default EditarCot