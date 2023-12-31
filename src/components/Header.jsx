import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import BuscarPersonajes from './BuscarPersonajes'
import Lista from './ListaCharacters'
import Logo from '../assets/img/logo.png'
import Logout from './logout'
import Perfil from './profile'
import Devs from './devs'

export default function Header() {
    return (
        <BrowserRouter>
        <header>
            <nav className="navbar navbar-expand-lg bg-general" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link to="/home" className='nav-link'>
                        <img src={Logo} alt="Logo" id='logo-header' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/home" className='nav-link'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/buscador" className='nav-link'>Buscador</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/lista-de-personajes" className='nav-link'>Personajes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/devs" className='nav-link'>Desarrolladores</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/perfil" className='nav-link'>Perfil</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
            <Routes>
                <Route path='/home' element={<Home/>} />
                <Route path='/buscador' element={<BuscarPersonajes/>}/>
                <Route path='/lista-de-personajes' element={<Lista/>} />
                <Route path='/devs' element={<Devs/>}/>
                <Route path='/perfil' element={<Perfil/>}/>
            </Routes>
        </BrowserRouter>
    )
}
