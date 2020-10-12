import React from 'react';
import AddTodo from '../tasks/AddTodo';
import Todos from '../tasks/Todos';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Dashboard = ({ uid }) => {
    if (!uid ) return <Redirect to="signin" />
    return(
        <>
            <AddTodo />
            <Todos/>
        </>
    );
}

const mapStateToProps = state => {
    // console.log(state);
    const uid = state.firebase.auth.uid;
    return {
      uid: uid 
    };
};

export default connect(mapStateToProps)(Dashboard);