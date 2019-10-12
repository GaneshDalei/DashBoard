import { connect } from 'react-redux';
import HeaderComponent from '../components/HeaderComponent';

const mapStateToProps = (state)=>{
    console.log(state);
    return {

    }
    return state;
}

const HeaderComponentContainer = connect(mapStateToProps,null)(HeaderComponent);
export default HeaderComponentContainer;