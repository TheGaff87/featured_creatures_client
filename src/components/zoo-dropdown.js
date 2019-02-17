import React from 'react';

export default function ZooDropdown(props) {
    return (
        <select name="zoo-dropdown" className="zoo-dropdown">
            <option value={props.zoo}>{props.zoo}</option>
        </select>
    );
}