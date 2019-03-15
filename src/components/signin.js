import React from 'react';
import { connect } from 'react-redux';

import TextInput from './text-input';

import {login} from '../actions';
import {signup} from '../actions';

import './signin.css'

export class Signin extends React.Component {
    constructor(props) {
      super(props);
      this.signupUser = this.signupUser.bind(this);
      this.signinUser = this.signinUser.bind(this);
    }

    signupUser(e) {
        e.preventDefault();
        const user = {
            username: this.username.value,
            password: this.password.value
            };
        this.props.dispatch(signup(user));
        document.getElementsByClassName('signin-form')[0].reset();
    }

    signinUser(e) {
        e.preventDefault();
        const user = {
            username: this.username.value,
            password: this.password.value
            };
        this.props.dispatch(login(user));
    }


    render() {
    if (this.props.showSigninForm) {
    return (
        <section className='signin'>
            <form className='signin-form'>
            <label><span className='required'>Username (required)</span>
                <input type='text' className='username' placeholder= 'Enter your username' size='50'
                ref={input => (this.username = input)} />
            </label>
            <label><span className='required'>Password (required)</span>
                <input type='password' className='password' placeholder= 'Password must be at least 5 characters' size='50'
                ref={input => (this.password = input)} />
            </label>
            <button type="submit" className="signup-button" onClick={this.signupUser}>Sign up</button>
            <button type="submit" className="signin-button" onClick={this.signinUser}>Signin</button>
            </form>
        </section>
    )
    } else {
        return null
    }
}
}

const mapStateToProps = state => ({
    showSigninForm: state.showSigninForm
  });
  
  export default connect(mapStateToProps)(Signin);