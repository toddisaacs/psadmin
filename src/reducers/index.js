/**
 * Created by todd.isaacs on 11/22/16.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
