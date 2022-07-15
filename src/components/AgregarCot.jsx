import axios from 'axios'
import React, { useState } from 'react'
import uniquid from 'uniqid'
function AgregarCot(){
    //Hooks
    const[nombre, setNombre] = useState('') 
    const[origen, setOrigen] = useState('') 
    const[destino, setDestino] = useState('') 
    const[transporte, setTransporte] = useState('') 
    const[costoTotal, setCostoTotal] = useState('') 
    function agregarCotizacion(){
        let cot = {
            nombre,
            origen,
            destino,
            transporte,
            costoTotal,
            idCot:uniquid()
        }
        console.log(cot)

        axios.post('/api/cotizacion/agregarCotizacion', cot)
        .then(res =>{
            alert(res.data)
        })
        .then(err =>{
            console.log(err)
        })
    }

    return(
        <div className='container'>
            <div className='row'>
                <h2 className='mt-4'>Crear nueva cotización</h2>
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

                    <button onClick={agregarCotizacion} className='btn btn-success'>Guardar Cotización</button>                    
                </div>                
            </div>            
        </div>
    )
}

export default AgregarCot   