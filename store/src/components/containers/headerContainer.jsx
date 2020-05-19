import React from 'react';
import Navigation from '../../pages/navigation';
import {connect} from "react-redux";

export class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        console.log('headerContainer: ', this.props)
    }
    render(){
        return (<>
            <Navigation store={this.props.products} loggedIn={this.props.user.loggedIn}/>
        </>   )
    }
}

function mapStateToProps(state){
    console.log('state', state)
    return {
        products: state.products,
        user: state.user
    }
}

export default connect(mapStateToProps)(HeaderContainer);
