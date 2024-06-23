// conditional rendering = allows you to control what gets rendered in ur application based on certain conditions
// show, hide, change component


import PropTypes from 'prop-types'

function UserGreeting(props){

    if(props.isLoggedIn){
        return <h2 className="welcome-msg">Welcome {props.username} </h2>
    }
    return <h2 className="login-prompt">Please login to continue</h2>

    // OR use ternary operator
    /*
    return(props.isLoggedIn ? 
    <h2>Welcome {props.username} </h2> : 
    <h2>Please login to continue</h2>)
    */
    
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting