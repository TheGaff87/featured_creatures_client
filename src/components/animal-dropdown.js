import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

export function AnimalDropdown(props) {

    const animal = props.animal.map((animals, index) => (
        <li key={index} value={animals}>
            <Link to="/encounter">{animals}</Link>
        </li>
    ));

    return (
        <div><br />
            <h3>Animals</h3>
        <ul name="animal-dropdown" className="animal-dropdown">
            {animal}
        </ul>
        </div>
    );
}

const mapStateToProps = state => ({
    animal: state.animal
  });
  
  export default connect(mapStateToProps)(AnimalDropdown);