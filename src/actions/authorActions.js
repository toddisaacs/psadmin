import * as types from './actionTypes';
import authorApi from '../api/mockAuthor';
import  {beginAjaxCall} from './ajaxStatusActions';


export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  //return a function that takes a dispatch
  return function (dispatch) {
    dispatch(beginAjaxCall());

    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
