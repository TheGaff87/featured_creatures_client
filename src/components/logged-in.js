import React from 'react';
import { connect } from 'react-redux';
import {logout} from '../actions';
import {Link} from 'react-router-dom';

export function LoggedIn(props) {

    function onClick(e) {
        props.dispatch(logout())
    }

    if (props.isLoggedIn) {
    return (
        <div className='loggedin-only'>
            <h2 className='welcome-user'>Welcome, {props.currentUser}. In addition to filtering encounters, you can now add new encounters and edit or delete encounters you have added. Enjoy!</h2>
            <Link to='/main'><button type='submit' onClick={e => onClick(e)}>Logout</button></Link>
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