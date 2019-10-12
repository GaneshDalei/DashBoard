import React from 'react';
import '../styles/main.scss';
import HeaderComponentContainer from '../containers/HeaderComponentContainer';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from "../reducers/reducer";
import LoginComponentContainer from '../containers/LoginComponentContainer';
import DashBoardComponentContainer from '../containers/DashBoardComponentContainer';
import RegistationComponentContainer from '../containers/RegistationComponentContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
const _store = createStore(rootReducer);
class maiAppComponent extends  React.Component{
render(){
    return(
        <Provider store={_store}>
        <div className="main-app">
            <BrowserRouter>
            
            <HeaderComponentContainer/>
            <Route path="/login" component={LoginComponentContainer}/>
            <Route path="/DashBoard" component={DashBoardComponentContainer} />
            <Route path="/registation" component={RegistationComponentContainer}></Route>
            </BrowserRouter>
        </div>
        </Provider>
    )
}
}
export default maiAppComponent;