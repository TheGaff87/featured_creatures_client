import React from 'react';

export default function AnimalDropdown(props) {
    return (
        <select name="animal-dropdown" className="animal-dropdown">
            <option value={props.animal}>{props.animal}</option>
        </select>
    );
}