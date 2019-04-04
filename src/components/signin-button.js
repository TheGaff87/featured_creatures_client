import React from 'react';
import { connect } from 'react-redux';
import {showSigninForm} from '../actions';

export function SigninButton(props) {

    function onClick(e) {
        if (props.showSigninForm) {
            props.dispatch(showSigninForm(false));
        }else{
            props.dispatch(showSigninForm(true));
        }
    }

    if (!props.isLoggedIn) {
    return (
    <button type="button" className="signin-select" onClick={e => onClick(e)}>Already have an account? Log in!</button>
    )
    } else {
        return null
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
    showSigninForm: state.showSigninForm
  });
  
  export default connect(mapStateToProps)(SigninButton);