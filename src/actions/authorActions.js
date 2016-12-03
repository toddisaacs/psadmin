import * as types from './actionTypes';
import authorApi from '../api/mockAuthor';

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  //return a function that takes a dispatch
  return function (dispatch) {
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
