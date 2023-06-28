import React, { useState } from 'react'
import axios from 'axios'

export default function BuscarPersonajes() {
    const [personajes, setPersonajes] = useState ([]);
    const [nombre, setNombre] = useState ("");
    const obtenerPersonajeByNombre =  () => {
        axios.get(`https://rickandmortyapi.com/api/character?name=${nombre}`).then((response) => { 
            setPersonajes(response.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }
    const handleName = (e) => {
        setNombre (e.target.value);
    }
    const handleSubmit = (e) => {
        obtenerPersonajeByNombre();
        e.preventDefault();
    }
    return (
        <>
            <div className='bg-general'>
                <div className='container'>
                    <h1 className='text-center pt-4 titulo-home'>Busca a tu personaje favorito</h1>
                    <form onSubmit={handleSubmit}>
                        <label className='form-label text-white fs-4'>Ingresa el nombre del personaje</label>
                        <input type='text' className='form-control ' onChange={handleName}/>
                        <button className='btn btn-success my-3' type='submit'>Buscar personaje</button>
                    </form>
                    <br />
                
                {
                    personajes.length === 0 ? (
                        <div class="alert alert-danger" role="alert">
                            Personaje no encontrado
                        </div>
                    ) : (
                        <div className='row'>
                            {
                                personajes.map((personajes, indice) => {
                                    return (
                                        <div className='col-md-3 mt-4'>
                                            <div className='card'>
                                                <h5 className='card-header'> {personajes.name}</h5>
                                                <div className='card-body'>
                                                    <img src={personajes.image} alt='' className='img-fluid'/>
                                                    <p>Status: {personajes.status}</p>
                                                    <p>Specie: {personajes.species}</p>
                                                    <p>Gender: {personajes.gender}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
                </div>
            </div>
        </>

    )
}
