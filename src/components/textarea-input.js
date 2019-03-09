import React from 'react';

export default function TextareaInput(props) {
    return (
        <div className="textarea-input">
            <label>
                {props.field}: <input type="textarea" rows="4" cols="40" className={props.className} placeholder={props.placeholder} />
            </label>
        </div>
    )
}