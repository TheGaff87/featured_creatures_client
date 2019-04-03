import React from 'react';
import { connect } from 'react-redux';

export function SignupCheck(props) {

    if (props.showSignupCheck) {
    return (
        <div className='signup-check'>
            <p className='password-length'>Password must be at least five characters.</p>
        </div>
    )
    }else{
        return null
    }
}

const mapStateToProps = state => ({
    showSignupCheck: state.showSignupCheck
  });
  
  export default connect(mapStateToProps)(SignupCheck);