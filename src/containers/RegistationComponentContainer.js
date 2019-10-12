import {connect} from "react-redux";
import RegistationComponent from '../components/RegistationComponent'
const mapStateToProps = (state)=>{
return state;
}
const mapDispatchToProps =  (dispatch)=>{

}
const RegistationComponentContainer = connect(mapStateToProps, mapDispatchToProps)(RegistationComponent)


export default RegistationComponentContainer