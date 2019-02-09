import React from 'react';

export default function Signin(props) {
    return (
        <section className="signin">
            <form action="/api/users/" method="post" class="signin-form hidden">
            <button type="button" className="signin-select">Signin/Signup</button>
            <label>
                <input type="text" size="35" name="username" class="username" aria-label="username" placeholder="Enter username" required />
            </label>
            <label>
                <input type="password" size="35" name="password" class="password" aria-label="password" placeholder="Password must be at least 5 characters" required />
            </label>
            <button type="submit" class="signup-button">Sign up</button>
            <button type="submit" className="signin-button">Signin</button>
            </form>
        </section>
    );
}