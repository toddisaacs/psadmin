import * as types from './actionTypes';
import courseApi from '../api/mockCourse';

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses: courses};
}

export function updateCoursesSuccess(course) {
  return { type: types.UPDATE_COURSES_SUCCESS, course: course};
}

export function createCoursesSuccess(course) {
  return { type: types.CREATE_COURSES_SUCCESS, course: course};
}

export function loadCourses() {
  //return a function that takes a dispatch
  return function (dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  //return a function that takes a dispatch
  return function (dispatch, getState) {
    return courseApi.saveCourse(course)
    .then(savedCourse => {
      course.id ? dispatch(updateCoursesSuccess(savedCourse)) : dispatch(createCoursesSuccess(savedCourse));
    }).catch(error => {
      throw(error);
    });
  };
}
