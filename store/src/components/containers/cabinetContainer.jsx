import React from "react";
import {Cabinet} from "../../pages/cabinet/cabinet";
import Redirect from "react-router-dom/es/Redirect";
import {connect} from "react-redux";

export class CabinetContainer extends React.Component {

 render(){
     return (
         this.props.loggedIn ? <Cabinet/> :<Redirect to="/signin"/>

     )
 }
}

function mapStateToProps(state){

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
