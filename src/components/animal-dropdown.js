import React from 'react';
import { connect } from 'react-redux';

export function AnimalDropdown(props) {
    const animals = props.animals.map((animal, index) => (
        <option key={index} value={animal}>
            {animal}
        </option>
    ));

    return (
        <select name="animal-dropdown" className="animal-dropdown">
            {animals}
        </select>
    );
}

const mapStateToProps = state => ({
    animals: state.animals
  });
  
  export default connect(mapStateToProps)(AnimalDropdown);