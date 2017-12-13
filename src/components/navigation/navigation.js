import React from 'react';
import ReactDOM from 'react-dom';
//import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class Bar extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto">Inicio</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink>
                                <Link to="/categorias" onClick={this.toggleNavbar}>Categorias</Link>
                            </NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink>
                                <Link to="/buscador"onClick={this.toggleNavbar}>Buscador</Link>
                            </NavLink>
                        </NavItem> */}
                    </Nav>
                </Collapse>
            </Navbar>
            {/* <Inicio value={this.state.collapsed}/> */}
            </div>
        );
    }
}

// function Inicio(props){
//     const value=props.value;
//     if (value==true)
//         return(
//         <h1> Bienvenido al Buscador de Perfiles </h1>
//         );
//     return({});
// }