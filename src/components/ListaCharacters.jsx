import React, {useState, useEffect} from 'react'
import rickandmorty from '../assets/img/morty.jpg'
import axios from 'axios'

export default function ListaCharacters() {
    const [characters, setCharacters] = useState ([]);
    const obtenerCharacters =  () => {
        axios.get("https://rickandmortyapi.com/api/character").then((response) => { 
            setCharacters(response.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        obtenerCharacters();
    }, [])
    return (
        <>
        <main className='bg-general'>
            <section className='container py-5'>
                <div className='row'>
                    <div className='col-md-8 d-flex align-items-center'>
                        <h1 className='text-white titulo-home text-center'>Todos los personajes de Rick and Morty</h1>
                    </div>
                    <div className='col-md-4'>
                        <img src={rickandmorty} alt="morty" className='img-fluid'/>
                    </div>
                </div>
            </section>
            <div className='container'>
            <h1 className='text-center titulo-home'> Lista de personajes</h1>
            <div className='row'>
                {
                    characters.map((character, indice) => {
                        return(
                            <div className='col-md-3 mt-4' key={indice}>
                                <div className='card'>
                                    <h5 className='card-header'>{character.name}</h5>
                                    <div className='card-body'>
                                        <img src={character.image} alt="" className='img-fluid'/>
                                        <p>Status: {character.status}</p>
                                        <p>Specie: {character.species}</p>
                                        <p>Gender: {character.gender}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </main>
        </>
    )
}
