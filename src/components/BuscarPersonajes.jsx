import React, { useState } from 'react'
import axios from 'axios'

export default function BuscarPersonajes() {

    const [personajes, setPersonajes] = useState ([]);
    const [nombre, setNombre] = useState ("");
    
    const obtenerPersonajeByNombre =  () => {
        axios.get(`https://rickandmortyapi.com/api/character?name=${nombre}`).then((response) => { 
            console.log(response.data.results);
            setPersonajes(response.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleName = (e) => {
        console.log (e.target.value);
        setNombre (e.target.value);
    }

    const handleSubmit = (e) => {
        obtenerPersonajeByNombre();
        e.preventDefault();
    }
    console.log(personajes)
    return (
        <div className='bg-dark text-white'>
            <div className='container'>
                <h1 className='text-center pt-4'>Busca a tu personaje favorito</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Ingresa el nombre del personaje</label>
                    <input type='text' className='form control' onChange={handleName}/>

                    <button className='btn btn-primary' type='submit'>Buscar personaje</button>
                </form>
            </div>
        </div>
    )
}
