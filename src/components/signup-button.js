import React from 'react';
import { connect } from 'react-redux';
import {showSignupForm} from '../actions';

export function SignupButton(props) {

    function onClick(e) {
        if (props.showSignupForm) {
            props.dispatch(showSignupForm(false));
        }else{
            props.dispatch(showSignupForm(true));
        }
    }

    if (!props.isLoggedIn) {
    return (
    <button type="button" className="signin-select" onClick={e => onClick(e)}>Create an account</button>
    )
    } else {
        return null
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
    showSignupForm: state.showSignupForm
  });
  
  export default connect(mapStateToProps)(SignupButton);