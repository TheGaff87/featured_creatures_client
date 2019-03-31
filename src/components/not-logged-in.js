import React from 'react';

export default function NotLoggedIn(props) {

    if (!props.isLoggedIn) {
    return (
        <p className='not-logged-in'>Welcome! You can filter encounters by animal or zoo. You can also create an account or log in to your account below. Your adventure awaits!</p>
    )
    } else {
        return null
    }
}