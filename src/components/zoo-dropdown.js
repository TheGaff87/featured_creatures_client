import React from 'react';
import { connect } from 'react-redux';

export function ZooDropdown(props) {
    const zoos = props.zoos.map((zoo, index) => (
        <option key={index} value={zoo}>
            {zoo}
        </option>
    ));

    return (
        <div>
        <h3>Zoos</h3>
        <select name="zoo-dropdown" className="zoo-dropdown">
            {zoos}
        </select>
        </div>
    );
}

const mapStateToProps = state => ({
    zoos: state.zoos
  });
  
  export default connect(mapStateToProps)(ZooDropdown);