import React from 'react';

export default function TextInput(props) {
    return (
        <div className='text-input'>
            <label>
                {props.field}: <input type='text' size='50' className={props.className} placeholder={props.placeholder} />
            </label>
        </div>
    )
}