import React from 'react';

import './categorias.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Link } from 'react-router-dom'


export default class Categorias extends React.Component {
     
  render() {
    const categorias= ["Entreprise Architect","Software Architect","Systems Arquitect", "Data Architect", "Big Data Architect","Cloud Architect","DevOps Engineer", "IOS/Android Engineer","QA Engineer","Big Data Engineer","QA Analyst","Data Scientist","IOT Expert","Back-end", "Front-end","Layout","UX Designer"  ]    
    const listItems = categorias.map((categoria) =>   
       <Col key={categoria} xs="10" sm="5" lg="2" >
          <Link to={`/categorias/`+categoria}>{categoria}</Link>
       </Col>
      ); 
    return (

      <Container >
        <Row>{listItems}</Row>      
      </Container>
      );
    }
    
  }
  