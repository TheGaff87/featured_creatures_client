import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import {getEncountersByZoo} from '../actions';

import './dropdowns.css';

export class ZooDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    
    onClick(term) {
        this.props.dispatch(getEncountersByZoo(term));
    }

    render() {
        const zoo = this.props.zoo.map((zoos, index) => (
            <li key={index} value={zoos}>
                <Link to={`/main/${zoos}`} onClick={e => this.onClick(e.target.textContent)}>{zoos}</Link>
            </li>
        ));

    return (
        <div className='zoos-div'>
        <h2 className='zoos-header'>Filter by Zoo</h2>
        <ul name="zoo-dropdown" className="zoo-dropdown">
            {zoo}
        </ul>
        </div>
    );
}
}


const mapStateToProps = state => ({
    zoo: state.zoo
  });
  
  export default connect(mapStateToProps)(ZooDropdown);