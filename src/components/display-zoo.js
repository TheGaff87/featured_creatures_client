import React from 'react';
import { connect } from 'react-redux';
import DisplayEncounter from './display-encounter';

export function DisplayZoo(props) {
    return (
        <section className="display-zoo">
            <h3>Animal Encounters at <a href={props.zooWebsite} target='_blank'>{props.zooName}</a></h3>
            <DisplayEncounter />
        </section>
    );
}

const mapStateToProps = state => ({
    zooName: state.zooName,
    zooWebsite: state.zooWebsite,
  });
  
  export default connect(mapStateToProps)(DisplayZoo);