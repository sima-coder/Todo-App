import { toast } from 'react-toastify';

const todoReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_TODO': {
            toast.success("A task was added successfully");
            return state;
        }
            
        case 'ADD_TODO_ERR':{
            toast.error("An error was occurred");
            return state;
        }

        case 'REMOVE_TODO': {
            toast.warn("A task was removed successfully");
            return state;
        }
            
        case 'REMOVE_TODO_ERR':{
            toast.error("An error was occurred");
            return state;
        }

        case 'TOGGLE_COMPLETED': {
            toast.info("A task status was completed");
            return state;
        }
            
        case 'ADD_TODO_ERR':{
            toast.error("An error was occurred");
            return state;
        }

        case 'UPDATE_TODO': {
            toast.success("A task was updated successfully");
            return state;
        }
            
        case 'UPDATE_TODO_ERR':{
            toast.error("An error was occurred");
            return state;
        }


        default : return state
    }    
      
}

export default todoReducer;