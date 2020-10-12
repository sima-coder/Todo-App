import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const Todos = ({ todos }) => {

    return(
        <>
            <table className="table table-dark container mt-5">
                <thead>
                    <tr className="text-info">
                        <th >Tasks</th>
                        <th >Added On</th>
                        <th >Status</th>
                        <th >Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { todos && todos.map(todo => <Todo todo={todo} key={todo.id} />) }
                </tbody>
            </table>    
        </>
    );
}

const mapStateToProps = state => {
    console.log(state);
    const todos = state.firestore.ordered.todos;
    return {
      todos: todos,
      uid: state.firebase.auth.uid
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect((ownProps) => [
        {
            collection: "todos",
            where:["authorId","==",ownProps.uid],
            orderBy:["date","desc"]
        }
    ])
)(Todos);
