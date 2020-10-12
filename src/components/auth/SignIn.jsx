import React, {useState} from 'react';
import {signIn} from '../../actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const SignIn = (props) => {

    const [signin, setSignin] = useState({email:"", password:""});

    const handleChange = (e) => {
        setSignin({...signin, [e.target.id] : e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signin);
        props.signIn(signin);

    }

    // console.log( props.uid);

    if (props.uid) return <Redirect to="/" />
   
    return(
        <div className="bg vh-100">
            <form className="container mt-5" autoComplete="off" onSubmit={handleSubmit}>
                <legend><h2 className="text-dark p-3">Sign In</h2></legend>
                <div className="form-group col-lg-5">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={handleChange}/>
                </div>
                   
                <div className="form-group col-lg-5">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={handleChange}/>
                </div>  
                <button type="submit" className="btn btn-primary ml-3">Sign In</button>
            </form>
        </div>
    );
}


const mapStateToProps = state => {
    console.log(state);
    const uid = state.firebase.auth.uid;
    return {
      uid: uid
    };
};

const mapDispatchToProps = dispatch => {
    return {
      signIn: (creds) => dispatch(signIn(creds)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);