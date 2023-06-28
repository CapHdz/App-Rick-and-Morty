import React from 'react'
import { Link } from 'react-router-dom'
import HomeImg from '../assets/img/rickandmorty.png'
import Portal1 from '../assets/img/portal1.png'
import Portal2 from '../assets/img/portal2.png'
import Portal3 from '../assets/img/portal3.png'

export default function Home() {
    return (
        <main className='bg-general text-center text-white'>
            <section className='container'>
                <h1 className='titulo-home'>¡BIENVENIDOS!</h1>
                <div className='row bg-dark bg-opacity-50 rounded p-3 '>
                    <div className="col-md-4">
                        <img src={HomeImg} alt="Rick and Morty" className='img-fluid p-3'/>
                    </div>
                    <div className="col-md-8">
                        <h3>¡Hola!</h3>
                        <p className='text-start'>
                            ¡Bienvenidos a nuestra web dedicada a los inigualables personajes de la aclamada serie animada "Rick & Morty", te sumergirás en un viaje intergaláctico lleno de humor, ciencia ficción y aventuras desquiciadas. Prepárate para explorar los múltiples universos paralelos, donde Rick Sánchez, el genio científico y su nieto Morty, un adolescente tímido pero valiente, se enfrentan a situaciones surrealistas que desafían los límites de la imaginación. Conviértete en un verdadero fanático y descubre curiosidades fascinantes de los personajes y sus travesuras cósmicas. ¿Listo para embarcarte en un viaje lleno de portal guns, viajes en el tiempo y alienígenas extraños? ¡Únete a nosotros y adéntrate en el extraordinario universo de "Rick & Morty"!
                        </p>
                    </div>
                </div>
                <h1 className='titulo-home my-3'>¡EXPLORA!</h1>
                <div className='row'>
                    <div className='col-md-4 py-1'>
                        <div className="px-3 ruta d-flex align-items-center justify-content-center">
                            <Link to="/buscador" className='text-white fs-1 fw-bold link-ruta'>
                                <img src={Portal1} className='img-fluid' alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-4 py-1'>
                        <div className="px-3 ruta d-flex align-items-center justify-content-center">
                            <Link to="/lista-de-personajes" className='text-white fs-1 fw-bold link-ruta'>
                                <img src={Portal2} className='img-fluid' alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-4 py-1'>
                        <div className="px-3 ruta d-flex align-items-center justify-content-center">
                            <Link to="/devs" className='text-white fs-1 fw-bold link-ruta'>
                                <img src={Portal3} className='img-fluid' alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
