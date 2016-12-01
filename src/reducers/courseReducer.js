/**
 * Created by todd.isaacs on 11/22/16.
 */

import * as types from '../actions/actionTypes';
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}
