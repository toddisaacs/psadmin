/**
 * Created by todd.isaacs on 11/21/16.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from'react-router';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';

class CoursesPage extends Component {
  /**
   * Initialize state and call bind functions
   * @param props
   * @param context
   */
  constructor(props, context) {
    super(props, context);

    // this.state = {
    //   course: { title: "" }
    // };

    // this.onClickSave = this.onClickSave.bind(this);
    // this.onTitleChange = this.onTitleChange.bind(this);
    this.courseRow = this.courseRow.bind(this);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }


  // onTitleChange(event) {
  //   const course = this.state.course;
  //   course.title = event.target.value;
  //   this.setState({course: course});
  // }
	//
  // onClickSave() {
  //   //alert(`Saving ${this.state.course.title}`);
  //   this.props.actions.createCourse(this.state.course);
  // }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage} />
        <CourseList courses= {courses} />
      </div>

    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
CoursesPage.defaultProps = {};


/**
 * Adds the state to props
 * @param state
 * @param ownProps
 * @returns {{courses: *}}
 */
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

/**
 * Binds the actions to dispatch and adds to props
 * @param dispatch
 * @returns {{actions: *}}
 */
function mapDispatchToProps(dispatch) {
  return {
    // binds all the actions to dispatch
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
