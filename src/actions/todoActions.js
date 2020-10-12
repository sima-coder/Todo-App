export const addTodo = task => {
    return(dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore();
        const authorId = getState().firebase.auth.uid;

        const todo = { 
            task: task, 
            authorId: authorId,
            date: new Date(),
            completed: false
        }
        
        firestore
            .collection("todos")
            .add(todo)
            .then(() => {
                dispatch({
                    type: "ADD_TODO",
                    todo
                });
            })
            .catch((err) => {
                dispatch({
                    type: "ADD_TODO_ERR",
                    err
                });
            });
    };
};

export const removeTodo = todo => {
    return(dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore();
        // const author.id
        firestore
            .collection("todos")
            .doc(todo.id)
            .delete()
            .then(() => {
                dispatch({
                    type: "REMOVE_TODO",
                    todo
                });
            })
            .catch((err) => {
                dispatch({
                    type: "REMOVE_TODO_ERR",
                    err
                });
            });
    };
};


export const toggleCompleted = todo => {
    return(dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore();
        // const author.id
        firestore
            .collection("todos")
            .doc(todo.id)
            .set(
                {
                    ...todo,
                    completed: !todo.completed
                },
                { merge: true }
            )
            .then(() => {
                dispatch({
                    type: "TOGGLE_COMPLETED",
                    todo
                });
            })
            .catch((err) => {
                dispatch({
                    type: "TOGGLE_COMPLETED_ERR",
                    err
                });
            });
    };
};

export const editTodo = (updateTask, todo) => {
    return(dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection("todos")
            .doc(todo.id)
            .set(
                {
                    ...todo,
                    task: updateTask
                },
                { merge: true }
            )
            .then(() => {
                dispatch({
                    type: "UPDATE_TODO",
                    todo
                });
            })
            .catch((err) => {
                dispatch({
                    type: "UPDATE_TODO_ERR",
                    err
                });
            });
    };
};