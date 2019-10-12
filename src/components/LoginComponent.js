import React from 'react';
import {withRouter,Link} from 'react-router-dom';
class LoginComponent extends React.Component{
 
    constructor (props){
        super(props)
        this.state = {
            userName:props.userName,
            password: props.password,
            DashBoard:"",
        }
        let userName;
        let password;
    }
    submitClickHandler = (e)=>{
       
       if(this.userName === this.props.userName && this.password === this.props.password){
        this.props.loginSucess(true);
        this.setState({DashBoard:"dfdf"})
       }else{
        this.props.loginSucess(false); 
       }
    }
    userNameChandler = (e)=>{
        this.userName = e.target.value;
    }
    passwordChangeHandler = (e)=>{
        this.password = e.target.value;
    }
    render(){
        return(
            <div className="login-main">
                
                <div className="login-inner">
                    <div className="login">Login</div>
                    <div className="userName">UserName: <span><input type="test" onChange={this.userNameChandler}/></span></div>
                    <div className="password">Password: <span>  <input type="password" onChange={this.passwordChangeHandler}/></span></div>
                    <Link to={this.state.DashBoard}>  <button className="submit-button" onClick={this.submitClickHandler}>Submit</button></Link>
                </div>
                
            </div>
        )
    }
}
export default LoginComponent;