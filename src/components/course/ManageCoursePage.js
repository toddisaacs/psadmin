import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import toastr from 'toastr';

import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
	constructor(props, context) {
		super(props, context);

    //local state
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
    };

    //bind
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
	}

	componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      //Necessary to populate form when the existing course is loaded directly
      this.setState({course: Object.assign({}, nextProps.course)})
    }
  }

	updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  saveCourse(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: true});
    toastr.success('Course Saved');
    this.context.router.push('/courses');
  }

	render() {
		return (
      <CourseForm course={this.state.course}
                  allAuthors={this.props.authors}
                  errors={this.state.errors}
                  onChange={this.updateCourseState}
                  onSave={this.saveCourse}
                  loading={this.state.saving} />
		);
	}

}

ManageCoursePage.propTypes = {
	course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, id) {
  const courseArray = courses.filter(course => course.id === id);
  if (courseArray) return courseArray[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; //form path `/course/:id`

  let course =  {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  //we may not have loaded courses yet on a page refresh on a course edit
  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }
  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: `${author.firstName} ${author.lastName}`
    };
  });

  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
