import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

export function ZooDropdown(props) {
    const zoo = props.zoo.map((zoos, index) => (
        <li key={index} value={zoos}>
            <Link to="/zoo">{zoos}</Link>
        </li>
    ));

    return (
        <div>
        <h3>Zoos</h3>
        <ul name="zoo-dropdown" className="zoo-dropdown">
            {zoo}
        </ul>
        </div>
    );
}

const mapStateToProps = state => ({
    zoo: state.zoo
  });
  
  export default connect(mapStateToProps)(ZooDropdown);