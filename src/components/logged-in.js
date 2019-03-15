import React from 'react';
import { connect } from 'react-redux';

export function LoggedIn(props) {
    if (props.isLoggedIn) {
    return (
        <div className='loggedin-only'>
            <p className='welcome-user'>Welcome, {props.currentUser}.</p>
            <button type='submit'>Logout</button>
        </div>
    )
    } else {
        return null
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
    currentUser: state.currentUser
  });
  
  export default connect(mapStateToProps)(LoggedIn);