import React from 'react';
import { connect } from 'react-redux';
import {login} from '../actions';

import './signin.css'

export class Signin extends React.Component {
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
        this.props.dispatch(login(user));
    }


    render() {
    if (this.props.showSigninForm) {
    return (
        <section className='signin'>
            <form className='signin-form' onSubmit={this.onSubmit}>
            <label><span className='required'>Username (required)</span>
                <input type='text' className='username2' placeholder= 'Enter your username' size='50'
                ref={input => (this.username = input)} required />
            </label>
            <label><span className='required'>Password (required)</span>
                <input type='password2' className='password' placeholder= 'Password must be at least 5 characters' size='50'
                ref={input => (this.password = input)} required />
            </label>
            <button type="submit" className="signin-button">Signin</button>
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