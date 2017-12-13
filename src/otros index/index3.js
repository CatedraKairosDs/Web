
import ReactDOM from 'react-dom';
import React from 'react';
import Form from './components/Form'
import Grid from './components/Grid'

// No es necesario incluir Note, ya que las notas son incluidas dentro de Grid.

// Ahora, montamos los componentes en sus respectivos contenedores:
class Prueba extends React.Component {
  render() {
      return (
        <div>
          <div id='form'>
            <Form/>
          </div>
          <div id='grid'>
            <Grid/>
          </div>
        </div>

      );
  }

}


ReactDOM.render(<Prueba />, document.getElementById('root'));
