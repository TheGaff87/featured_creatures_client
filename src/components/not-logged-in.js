import React from 'react';

export default function NotLoggedIn(props) {

    if (!props.isLoggedIn) {
    return (
        <h2 className='not-logged-in'>You can filter encounters by animal or zoo. You can also create an account or log in to your account below. Your adventure awaits!</h2>
    )
    } else {
        return null
    }
}