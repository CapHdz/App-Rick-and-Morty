import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';

export default function Login() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      // Mensaje de bienvenida al hacer login
      console.log(`¡Bienvenido, ${user.name}!`);
    }
  }, [isAuthenticated, user]);

  return (
    <button className='btn btn-primary' onClick={() => loginWithRedirect()}>
      Iniciar Sesión
    </button>
  );
}