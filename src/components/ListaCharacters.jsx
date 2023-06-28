import React, {useState, useEffect} from 'react'
import rickandmorty from '../assets/img/morty.jpg'
import axios from 'axios'

export default function ListaCharacters() {
    const [characters, setCharacters] = useState ([]);

    const obtenerCharacters =  () => {
        axios.get("https://rickandmortyapi.com/api/character").then((response) => { 
            console.log(response.data.results);
            setCharacters(response.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        obtenerCharacters();
    }, [])

    console.log(characters)
    
    return (
        <>
            <main className='bg-dark'>
            <section className='container py-5'>
                <div className='row'>
                    <div className='col-md-7 text-white'>
                        <h1>Todos los personajes de Rick and Morty</h1>
                        <button className='btn btn-primary'>Busca el personaje de tu preferencia</button>
                    </div>
                    <div className='col-md-5'>
                        <img src={rickandmorty} alt="morty" className='img-fluid'/>
                    </div>
                </div>
            </section>
        </main>

        <div className='container'>
            <h1 className='text-center text-black'> Lista de personajes</h1>
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
        </>
    )
}
