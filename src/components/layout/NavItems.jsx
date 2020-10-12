import React from 'react';
import {Link} from 'react-router-dom';
import {signOut} from '../../actions/authActions';
import { connect } from 'react-redux';

const NavItems = ({ signOut, uid }) => {
    if(uid){
        return(
            <Link to="/signin" className="nav-link" onClick={ signOut }>Log Out</Link> 
        );
    }
    else{
        return(
            <>
                <div className="d-flex justify-content-flex-end">
                <Link to="/signup" className="nav-link">Sign Up</Link> 
                <Link to="/signin" className="nav-link">Sign In</Link> 
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state);
    const uid = state.firebase.auth.uid;
    return {
      uid: uid 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavItems);
