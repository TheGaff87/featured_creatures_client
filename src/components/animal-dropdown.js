import React from 'react';
import { connect } from 'react-redux';

export function AnimalDropdown(props) {
    return (
        <select name="animal-dropdown" className="animal-dropdown">
            <option value={props.animal}>{props.animal}</option>
        </select>
    );
}

const mapStateToProps = state => ({
    animal: state.animal
  });
  
  export default connect(mapStateToProps)(AnimalDropdown);