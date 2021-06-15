import React from 'react';

const CourseForm = (props) => {
    return (
        <form onSubmit={props.current.length === 0 ? null : props.addCourse}>
            <input type='text' onChange={props.updateCourse} value={props.current} />
            <button type='submit'>Add Course</button>
        </form>
    )
}
export default CourseForm;