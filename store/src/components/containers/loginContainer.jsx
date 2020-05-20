import React from 'react';
import Navigation from '../../pages/navigation';
import {connect} from "react-redux";
import {userLogin, userLogout} from "../../store/actions/user";
import Login from "../../pages/login/Login";
import Redirect from "react-router-dom/es/Redirect";

export class LoginContainer extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        console.log(this.props)
    }

    render(){
        return(
                this.props.loggedIn ? <Redirect to="/cabinet"/>
                :
                <Login onClick={(e)=>{this.props.login(); e.preventDefault()}}/>
        )
    }
}

function mapStateToProps(state){

    return {
        ...state.user
    }
}
function mapDispatchToProps(dispatch){
    return {
        login: (name) => dispatch(userLogin(name)),
        logout: (name) => dispatch(userLogout(name)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
