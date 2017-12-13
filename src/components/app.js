import React from 'react';
import ReactDOM from 'react-dom';
//import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Navigation from './navigation/navigation';
import Buscador from './body/body-buscar';
import Categorias from './body/body-categories';
import Users from './body/users-categories/users';


const categorias= ["Entreprise Architect","Software Architect","Systems Arquitect", "Data Architect", "Big Data Architect","Cloud Architect","DevOps Engineer", "IOS/Android Engineer","QA Engineer","Big Data Engineer","QA Analyst","Data Scientist","IOT Expert","Back-end", "Front-end","Layout","UX Designer"  ]  
class App extends React.Component {
    render() { 
        return (
            <div>
                <Router>
                    <div>
                    <Navigation/>
                    <Route exact path="/" component={Inicio} />
                    {/* <Route exact path="/buscador" component={Buscador} /> */}
                    <Route exact path="/categorias" component={Categorias} />
                    <RouterTypeUsers categorias={categorias}/>
                    </div>
                </Router>
            </div>
        );
    }

}
function Inicio(){
        return(
        <h1> Bienvenido al Buscador de Perfiles </h1>
        );
}

function RouterTypeUsers(props){
    const cat= props.categorias;
    const listItems = cat.map((categoria) =>   
        <Route path={`/categorias/`+categoria} component={() => <Users categoria={categoria} />} />
    ); 
    return (
     listItems   
   );
 }

export default App;