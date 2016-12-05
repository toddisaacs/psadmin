/**
 * Created by todd.isaacs on 11/22/16.
 */
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';

import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; //used to make sure we don't mutate state (DEV only)
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  ));

  return store;
}
