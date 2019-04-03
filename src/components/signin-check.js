import React from 'react';
import { connect } from 'react-redux';

export function SigninCheck(props) {

    if (props.showSigninCheck) {
    return (
        <div className='signin-check'>
            <p className='invalid-signin'>Invalid username/password.</p>
        </div>
    )
    }else{
        return null
    }
}

const mapStateToProps = state => ({
    showSigninCheck: state.showSigninCheck
  });
  
  export default connect(mapStateToProps)(SigninCheck);