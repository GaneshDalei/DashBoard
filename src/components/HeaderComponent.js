import React from 'react';
import {Link} from 'react-router-dom';
class HeaderComponent extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="header-main">
                <div className="header-inner">
                  <div><Link to="/registation">Regisation</Link></div>
                  <div><Link to="/login">Login</Link></div>
                  
                </div>
            </div>
        )
    }
}
export default HeaderComponent;