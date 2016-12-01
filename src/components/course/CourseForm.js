import React, {PropTypes} from 'react';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
	return (
		<form>

    </form>
	);
};

CourseForm.propTypes = {
	course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired
};

export default CourseForm;
