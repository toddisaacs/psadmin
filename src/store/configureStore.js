/**
 * Created by todd.isaacs on 11/22/16.
 */
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; //used to make sure we don't mutate state (DEV only)
import thunk from 'redux-thunk';


export default function configureStore(initialState) {
  return createStore(rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
