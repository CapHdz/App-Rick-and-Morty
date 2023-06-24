import React from 'react';

class PerfilDeUsuario extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: 'Jose Juarez',
      edad: 25,
      email: 'josejuarez@ejemplo.com'
    };
  }

  render() {
    const { nombre, edad, email } = this.state;

    return (
      <div>
        <h2>Perfil de Usuario</h2>
        <p><strong>Nombre:</strong> {nombre}</p>
        <p><strong>Edad:</strong> {edad}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    );
  }
}

export default PerfilDeUsuario;
