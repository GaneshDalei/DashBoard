import React from 'react';

class Reagistation extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="registation-main">
            <div className="registation-inner">
              <div className="header">Regisation</div><br/>
              <div>UserID : &nbsp;&nbsp;&nbsp;&nbsp; <span><input type="number" /></span></div><br/>
              <div>UserName : <span><input type="test" /></span></div><br/>
              <div>Password : <span><input type="test" /></span></div><br/>
              <div><button>submit</button></div>
            </div>
        </div>
        )
    }
}
export default Reagistation;