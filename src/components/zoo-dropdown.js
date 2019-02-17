import React from 'react';
import { connect } from 'react-redux';

export function ZooDropdown(props) {
    return (
        <select name="zoo-dropdown" className="zoo-dropdown">
            <option value={props.zooName}>{props.zooName}</option>
        </select>
    );
}

const mapStateToProps = state => ({
    zooName: state.zooName
  });
  
  export default connect(mapStateToProps)(ZooDropdown);