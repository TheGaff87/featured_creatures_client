import React from 'react';
import { connect } from 'react-redux';

export function ZooDropdown(props) {
    const zoos = props.zoos.map((zoo, index) => (
        <option key={index} value={zoo}>
            {zoo}
        </option>
    ));

    return (
        <select name="animal-dropdown" className="animal-dropdown">
            {zoos}
        </select>
    );
}

const mapStateToProps = state => ({
    zoos: state.zoos
  });
  
  export default connect(mapStateToProps)(ZooDropdown);