import React from 'react';
//import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Bar from './navigation/bar';
//import Buscador from './body/buscador';
import Categorias from './body/categorias';
import Users from './body/usersCategories/users';

import {connect} from 'react-redux'
import { ActionCreators} from '../actions'
import { bindActionCreators } from 'redux';
//import default from 'react-router-dom/Router';

const categorias= ["Entreprise Architect","Software Architect","Systems Arquitect", "Data Architect", "Big Data Architect","Cloud Architect","DevOps Engineer", "IOS/Android Engineer","QA Engineer","Big Data Engineer","QA Analyst","Data Scientist","IOT Expert","Back-end", "Front-end","Layout","UX Designer"  ]  
class App extends React.Component {
    render() { 
        return (
            <div>
                <Router>
                    <div>
                    <Bar/>
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

 function mapDispatchToProps(dispatch){
     return bindActionCreators(ActionCreators,dispatch);
 }

export default connect(()=>{return {}},mapDispatchToProps)(App);
//export default connect(mapSatteToprops)(Bar)