import React, {Component} from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import {connect} from 'react-redux';
import {ActionCreators} from '../actions'
import {bindActionCreators} from 'redux';

import Home from './home'
class AppContainer extends Component{

    addProfile(){
        this.props.addProfile();
    }
    render(){
        return(  
            <div>
                <Home {...this.props} />
                {/* <button onClick={()=>this.addProfile()}>Hey</button> */}
             </div>
        );      
        
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state)=>{ return {}},mapDispatchToProps)(AppContainer);