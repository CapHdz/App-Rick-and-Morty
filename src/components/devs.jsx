import React from 'react'
import Willian from '../assets/img/willian.jpg'
import Moises from '../assets/img/moises.jpg'
import Pablo from '../assets/img/pablo.jpg'
import Juan from '../assets/img/juan.jpg'
import Mery from '../assets/img/mery.jpg'
import Josue from '../assets/img/josue.jpg'

export default function Devs() {
    return (
        <>
        <main className='bg-general'>
            <div className='container'>
                <h1 className='titulo-home text-center text-white p-3'>DESARROLLADORES</h1>
                <div className='row'>
                    <div className='col-sm-3'>
                        <div className='card m-2 bg-dark bg-opacity-50'>
                            <img src={Willian} className='card-img-top img-fluid devs' alt='...'/>
                            <div className='card-body'>
                                <h5 className='card-title text-center text-white'>Willian Hernández</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Web developer</li>
                                    <li className="list-group-item">Componentes de home y header</li>
                                    <li className="list-group-item">Diseño de la web</li>
                                </ul>
                            </div>
                            <div className='card-body'>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-github"></i></a>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-linkedin"></i></a>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-facebook"></i></a>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='card m-2 bg-dark bg-opacity-50'>
                            <img src={Moises} className='card-img-top img-fluid devs' alt='...'/>
                            <div className='card-body'>
                                <h5 className='card-title text-center text-white'>Moises Centeno</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Web developer</li>
                                    <li className="list-group-item">Componentes de buscador y personajes</li>
                                    <li className="list-group-item">Integracion de UseEffect</li>
                                </ul>
                            </div>
                            <div className='card-body'>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-github"></i></a>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-linkedin"></i></a>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-facebook"></i></a>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='card m-2 bg-dark bg-opacity-50'>
                            <img src={Pablo} className='card-img-top img-fluid devs' alt='...'/>
                            <div className='card-body'>
                                <h5 className='card-title text-center text-white'>Pablo Zuniga</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Web developer</li>
                                    <li className="list-group-item">Componentes de login,logout y perfil</li>
                                    <li className="list-group-item">Integracion de Auth0</li>
                                </ul>
                            </div>
                            <div className='card-body'>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-github"></i></a>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-linkedin"></i></a>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-facebook"></i></a>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='card m-2 bg-dark bg-opacity-50'>
                            <img src={Juan} className='card-img-top img-fluid devs' alt='...'/>
                            <div className='card-body'>
                                <h5 className='card-title text-center text-white' >Juan Díaz</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Web developer</li>
                                    <li className="list-group-item">Componentes de login,logout y perfil</li>
                                    <li className="list-group-item">Integracion de Auth0</li>
                                </ul>
                            </div>
                            <div className='card-body'>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-github"></i></a>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-linkedin"></i></a>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-facebook"></i></a>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'></div>
                    <div className='col-sm-3'>
                        <div className='card m-2 bg-dark bg-opacity-50'>
                            <img src={Mery} className='card-img-top img-fluid devs' alt='...'/>
                            <div className='card-body'>
                                <h5 className='card-title text-center text-white'>Marlene Montoya</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Web developer</li>
                                    <li className="list-group-item">Componente de desarrolladores</li>
                                </ul>
                            </div>
                            <div className='card-body'>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-github"></i></a>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-linkedin"></i></a>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-facebook"></i></a>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='card m-2 bg-dark bg-opacity-50'>
                            <img src={Josue} className='card-img-top img-fluid devs' alt='...'/>
                            <div className='card-body'>
                                <h5 className='card-title text-center text-white'>Josue Sotoy</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Web developer</li>
                                    <li className="list-group-item">Componente de desarrolladores</li>
                                </ul>
                            </div>
                            <div className='card-body'>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-github"></i></a>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-linkedin"></i></a>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-facebook"></i></a>
                                <a href="" className='fs-3 mx-2'><i className="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}
