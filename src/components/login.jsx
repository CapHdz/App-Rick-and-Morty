import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import HomeImg from '../assets/img/rickandmorty.png'

export default function Login() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      // Mensaje de bienvenida al hacer login
      console.log(`¡Bienvenido, ${user.name}!`);
    }
  }, [isAuthenticated, user]);

  return (
    <div className='bg-general login'>
      <div className='row align-items-center justify-content-center p-5'>
        <div className="col-md-3"></div>
        <div className="col-md-3"><img src={HomeImg} alt="" className='img-fluid'/></div>
        <div className="col-md-3 ">
          <h1 className='text center titulo-home m-auto'>Bienvenido</h1>
          <br />
          <button className='btn btn-dark m-auto' onClick={() => loginWithRedirect()}>
            Iniciar Sesión
          </button>
        </div>
        <div className="col-md-3"></div>
      </div>
      
    </div>
  );
}