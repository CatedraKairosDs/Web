import React from 'react';
import ReactDOM from 'react-dom';
import './body-buscar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, FormGroup, Label, Form, Input } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


export default class Buscador extends React.Component {
  constructor(props){
    super(props);
}
    render() {
      return (
        <Form class="filtrado">
          <FormGroup>
           <Label> Nombre:</Label>
            <Input type="name" name="name" id="nameId" placeholder="Nombre a buscar" />
          </FormGroup>
          <FormGroup>
            <Label>Estado:</Label>
            <Input type="select" name="label">
              <option>ACEPTADO</option>
              <option>NEVERA</option>
              <option>RECHAZADO</option>
            </Input>
          </FormGroup>
          <FormGroup>
          <Link to={`/categorias/`+this.props.categoria+`/filtrado`}>
            <Button>FILTRAR</Button>
          </Link>
          </FormGroup>
          <FormGroup>
            <Button>MOSTRAR TODOS </Button>
          </FormGroup>
        </Form>
      );
    }
  }