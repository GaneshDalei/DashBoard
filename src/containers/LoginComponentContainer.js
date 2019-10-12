import {connect} from 'react-redux';
import LoginComponent from '../components/LoginComponent';

const maptoStateProps = (state)=>{
return {
    userName:state.login.loginDetails.username,
    password:state.login.loginDetails.password,
    loginStatus:state.login.loginDetails.loginStatus,
}
}
const mapDispatchToProps = (dispatch)=>{
return{
    loginSucess: (isTrue)=>{
        dispatch({type:"LOGIN_STATUS", value:isTrue});
    }
}
}
const LoginComponentContainer = connect(maptoStateProps, mapDispatchToProps)(LoginComponent);

export default LoginComponentContainer;