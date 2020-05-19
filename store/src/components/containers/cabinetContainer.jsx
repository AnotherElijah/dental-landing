
import React from "react";
import {Cabinet} from "../../pages/cabinet/cabinet";
import Redirect from "react-router-dom/es/Redirect";
import {userLogin, userLogout} from "../../store/actions/user";
import {connect} from "react-redux";
import {LoginContainer} from "./loginContainer";

export class CabinetContainer extends React.Component {

 render(){
     return (
         this.props.loggedIn ? <Cabinet/> :<Redirect to="/signin"/>

     )
 }
}

function mapStateToProps(state){
    console.log('state', state)
    return {
        ...state.user
    }
}
/*function mapDispatchToProps(dispatch){
    return {
        login: (name) => dispatch(userLogin(name)),
        logout: (name) => dispatch(userLogout(name)),
    }
}*/
export default connect(mapStateToProps)(CabinetContainer);
