import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(actionType) {
  if(actionType.length > 8 ){
    return actionType.substring(actionType.length - 8) == '_SUCCESS';
  }  else {
    return false;
  }
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (action.type == types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }

  return state;
}
