import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Buscador from '../body-buscar';
import TablaFiltrados from './tabla-filtrados';

export default class Users extends React.Component {
    constructor(props){
        super(props);
    }
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