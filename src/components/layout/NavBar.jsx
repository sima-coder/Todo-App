import React from 'react';
import {Link} from 'react-router-dom';
import NavItems from './NavItems';
import { connect } from 'react-redux';

const NavBar = () => {
    return(
        <>
            <nav className="navbar navbar-dark bg-dark">
                <Link to="/" className="navbar-brand"><h3>Todo App</h3></Link>
                <NavItems/>
            </nav>
        </>
    );
}

const mapStateToProps = state => {
    console.log(state);
    const todos = state.firestore.ordered.todos;
    return {
      todos: todos,
    };
};

export default connect(mapStateToProps)(NavBar);