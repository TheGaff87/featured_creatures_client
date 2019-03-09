import React from 'react';
import { connect } from 'react-redux';

import TextInput from './text-input';

import './signin.css'

export  function Signin(props) {
    if (props.showSigninForm) {
    return (
        <section className='signin'>
            <form action='/api/users/' method='post' className='signin-form'>
            <TextInput field='Username (required)' className='username' placeholder='Enter username' />
            <TextInput field='Password (required)' className='password' placeholder='Password must be at least 5 characters' />
            <button type="submit" className="signup-button">Sign up</button>
            <button type="submit" className="signin-button">Signin</button>
            </form>
        </section>
    )
    } else {
        return null
    }
}

const mapStateToProps = state => ({
    showSigninForm: state.showSigninForm
  });
  
  export default connect(mapStateToProps)(Signin);