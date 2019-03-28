import React from 'react';
import { connect } from 'react-redux';

import {signup} from '../actions';

import './signin.css'

export class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.username.value,
            password: this.password.value
            };
        this.props.dispatch(signup(user));
    }


    render() {
    if (this.props.showSignupForm) {
    return (
        <section className='signup'>
            <form className='signup-form' onSubmit={this.onSubmit}>
            <label><span className='required'>Username (required)</span>
                <input type='text' className='username1' placeholder= 'Enter your username' size='50'
                ref={input => (this.username = input)} required />
            </label>
            <label><span className='required'>Password (required)</span>
                <input type='password1' className='password' placeholder= 'Password must be at least 5 characters' size='50'
                ref={input => (this.password = input)} required />
            </label>
            <button type="submit" className="signup-button">Sign up</button>
            </form>
        </section>
    )
    } else {
        return null
    }
}
}

const mapStateToProps = state => ({
    showSignupForm: state.showSignupForm
  });
  
  export default connect(mapStateToProps)(Signup);