import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './dropdowns.css';

import {getEncountersByAnimal} from '../actions';

export class AnimalDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(term) {
        this.props.dispatch(getEncountersByAnimal(term));
    }

    render() {
        const animal = this.props.animal.map((animals, index) => (
            <li key={index} value={animals}> 
                <Link to={`/main/${animals}`} onClick={e => this.onClick(e.target.textContent)}>{animals}</Link>
            </li>
        ));

    return (
        <div className='animals-div'>
            <h2 className='animals-header'>Filter by Animal</h2>
        <ul name="animal-dropdown" className="animal-dropdown">
            {animal}
        </ul>
        </div>
    );
}

}

const mapStateToProps = state => ({
    animal: state.animal
  });
  
  export default connect(mapStateToProps)(AnimalDropdown);