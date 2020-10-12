import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { getFirebase, ReactReduxFirebaseProvider} from "react-redux-firebase";
import firebase from "./config/firebaseConfig";
import { createFirestoreInstance } from "redux-firestore";

import { useSelector } from "react-redux"; //allow to select uid
import { isLoaded } from "react-redux-firebase"; //check the authentification is loaded or not

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase})));

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
}

function AuthIsLoaded({children}){
  const auth = useSelector(state => state.firebase.auth);
  if(!isLoaded(auth))
    return (
      <div className="text-center">
        <div className="spinner-grow text-primary mt-5 pt-5"
             style={{width:"7rem", height:"7rem"}}
             role="status">
               <span className="sr-only"> Loading... </span>
        </div>
      </div>
    );
  return children;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
