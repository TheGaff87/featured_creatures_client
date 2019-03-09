import React from 'react';
import { connect } from 'react-redux';

export function SigninButton(props) {
    if (!props.isLoggedIn) {
    return (
    <button type="button" className="signin-select">Signin/Signup</button>
    )
    } else {
        return null
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
  });
  
  export default connect(mapStateToProps)(SigninButton);