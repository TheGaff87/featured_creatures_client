import React from 'react';
import './signin.css'

export default function Signin(props) {
    return (
        <section className="signin">
        <button type="button" className="signin-select">Signin/Signup</button>
            <form action="/api/users/" method="post" className="signin-form hidden">
            <label>
                <input type="text" size="35" name="username" className="username" aria-label="username" placeholder="Enter username" required />
            </label>
            <label>
                <input type="password" size="35" name="password" className="password" aria-label="password" placeholder="Password must be at least 5 characters" required />
            </label>
            <button type="submit" class="signup-button">Sign up</button>
            <button type="submit" className="signin-button">Signin</button>
            </form>
        </section>
    );
}