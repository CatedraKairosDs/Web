import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Route } from 'react-router-dom'
import Buscador from '../buscador';
import TablaFiltrados from './tablaFiltrados';

export default class Users extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.categoria}</h1> 
                <Buscador categoria={this.props.categoria}/>
                    <div>
                        <Route exact path={`/categorias/`+this.props.categoria+`/filtrado`} component={TablaFiltrados} />
                    </div>

            </div>
        );
    }
}