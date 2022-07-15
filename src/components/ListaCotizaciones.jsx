import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DetalleCot from './DetalleCot';
function ListaCotizaciones(){
    const[dataCots, setDataCots] = useState([])

    useEffect(()=>{
        axios.get('/api/cotizacion/obtenerCotizaciones')
        .then(res =>{
            console.log(res.data[0])
            setDataCots(res.data)
        }).catch(err =>{
            console.log(err);
        })
    }, [])

    //Mapear listaCot en objeto Cot

    const listaCot = dataCots.map(cot =>{
        return(
            <div>
                <DetalleCot cot={cot}/>
            </div>
        )
    })

    return(
        <div>
            <h2 className='mt-2'>Listado de Cotizaciones</h2>
            {listaCot}
        </div>
    )
}

export default ListaCotizaciones;