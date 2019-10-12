import React from 'react';
import { connect } from 'react-redux';
import DashBoardComponent from '../components/DashBoardComponent';
const mapStateToProps = (state)=>{
return state;
}

const DashBoardComponentContainer = connect(mapStateToProps, null)(DashBoardComponent);

export default DashBoardComponentContainer;