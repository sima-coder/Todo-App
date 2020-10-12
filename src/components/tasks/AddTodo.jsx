import React, {useState} from 'react';
import { addTodo } from "../../actions/todoActions";
import { connect } from 'react-redux';

const AddTodo = (props) => {

    const [task, setTask] = useState('');

    const handleChange = (e) => {
        setTask( e.target.value );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(task === '') return;
        props.addTodo(task);
        setTask('');
        // console.log(todo);
        document.querySelector('#addTodoForm').reset();
    }

    return(
        <>
            <form id="addTodoForm" className="container mt-5 bg-dark py-3" autoComplete="off" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col offset-3">
                        <input type="text" className="form-control " placeholder="Add a new task ..." onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-warning">Add</button>
                    </div>
                </div>
            </form>
        </>
    );
}

const mapDispatchToProps = dispatch => {
    return {
      addTodo: task => dispatch(addTodo(task))
    };
};
  

export default connect(null, mapDispatchToProps)(AddTodo);

