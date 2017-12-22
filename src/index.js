import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
//import App from './components/app';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
//import logger from 'redux-logger'
import reducer from './reducers'
//import composeWithDevTools from 'remote-redux-devtools';
import AppContainer from './containers/appContainer';
const loggerMiddleware= createLogger({predicate:(getState,action)=> true});

function configureStore(initialState){
  const enhancer= compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}
const store=configureStore({});

const AppBuena =() =>(
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

  ReactDOM.render(
    <AppBuena />,
    document.getElementById('root')
  );

