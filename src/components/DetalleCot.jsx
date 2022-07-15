import React, {useEffect}  from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function DetalleCot({cot}){

    const navegar = useNavigate()

    //Funcion para borrar Cotizacion
    function borrarCotizacion(idCot){
        axios.post('/api/cotizacion/borrarCotizacion', {idCot:idCot})
        .then(res=>{
            console.log(res.data)
            alert(res.data)
            navegar(0)
        }).catch(err =>{
            console.log(err)
        })
    }
    
    return(
        <div className='container'>            
            <table class="table mt-4">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Origen</th>
                    <th scope="col">Destino</th>
                    <th scope="col">Transporte</th>
                    <th scope="col">Costo-Total</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">{}</th>
                    <td>{cot.idCot}</td>
                    <td>{cot.nombre}</td>
                    <td>{cot.origen}</td>
                    <td>{cot.destino}</td>
                    <td>{cot.transporte}</td>
                    <td>{cot.costoTotal}</td>
                    <td><Link to={`/editarCotizacion/${cot.idCot}`}><li className='btn btn-success'>Editar</li></Link></td>
                    <td><button className='btn btn-danger' onClick={()=>{borrarCotizacion(cot.idCot)}}>Eliminar</button></td>
                    </tr>                                    
                </tbody>
            </table>
        </div>
    )
}

export default DetalleCot;