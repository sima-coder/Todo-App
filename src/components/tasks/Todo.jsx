import React, { useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Check from './Check';
import { removeTodo, toggleCompleted, editTodo } from '../../actions/todoActions';

const Todo = ({ todo, removeTodo, toggleCompleted, editTodo }) => {

    const [updateTask, setUpdateTask] = useState('');

    const handleRemove = (todo) => {
        if ( window.confirm( "Are you sure you want to delete this task ?" ) ) {
            removeTodo(todo);
        }   
    }

    const handleCheck = (todo) => {
        toggleCompleted(todo);
    }

    const handleChange = (e) => {
        setUpdateTask( e.target.value);
    }

    const handleEdit = (todo) => {
        // e.preventDefault();
        if (updateTask === '') return;
        editTodo(updateTask, todo);
        window.location.reload();
    }

    const toggleEdit = (id) => {
        const form = document.getElementById(id);
        form.classList.toggle("hide");
    }

    return(
        <>
            <tr>
                <th>{ todo.task }</th>
                <td>{ moment(todo.date.toDate()).calendar() }</td>
                <td><Check checked={ todo.completed } onClick={() => handleCheck(todo) }/></td>
                <td>
                    <span className="material-icons text-danger" 
                          style={{ cursor:"pointer" }}
                          onClick={ () => handleRemove(todo) }
                          title="Delete">
                        delete
                    </span>
                    <span className="material-icons text-warning"
                          style={{ cursor:"pointer" }}
                          onClick= { () => toggleEdit(todo.id) }
                          title="Edit"
                      >
                        edit
                    </span>
                    <form id={ todo.id }  className="hide" onSubmit= { () => handleEdit(todo) } autoComplete="off">
                        <input type = "text" 
                              placeholder = { todo.task }
                              onInput = { handleChange } />
                    </form>
                </td>
            </tr>  
        </>
    );
}

const mapDispatchToProps = dispatch => {
    return {
      removeTodo: todo => dispatch(removeTodo(todo)),
      toggleCompleted: todo => dispatch(toggleCompleted(todo)),
      editTodo: (task,todo) => dispatch(editTodo(task,todo))
    };
};

export default connect(null, mapDispatchToProps)(Todo);