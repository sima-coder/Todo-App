import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import todoReducer from "./todoReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    todo: todoReducer,
    auth: authReducer
});

export default rootReducer;