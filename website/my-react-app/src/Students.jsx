// props = read only properties that are shared btwn components
// component key = value

// proptypes = a mechanism that ensures that the passed value is of correct datatype
// age : PropTypes.number

// defaultProps = default values for props incase they are not passed from the parent component
// name = "guest"

import PropTypes from 'prop-types'
function Students(props){
    return(
        <div className="student">
            <p>Name : {props.name} </p>
            <p>Age : {props.age} </p>
            <p>Student : {props.isStudent ? "Yes":"No" } </p>

        </div>
    )

}
Students.prototype = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool,
}

Students.defaultProps = {
    name: "guest",
    age: 0,
    isStudent: false,
}

export default Students