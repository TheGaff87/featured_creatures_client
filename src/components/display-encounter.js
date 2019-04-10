import React from 'react';
import { connect } from 'react-redux';

import EditEncounterButton from './edit-encounter-button';
import EditEncounterFields from './edit-encounter-fields';
import EditEncounter from './edit-encounter';
import DeleteEncounterButton from './delete-encounter-button';
import DeleteEncounter from './delete-encounter';
import {getAllEncounters} from '../actions';

import './display-encounter.css';

export class DisplayEncounter extends React.Component {
    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.dispatch(getAllEncounters());
    }
    
    render() {
        
        const encounters = this.props.encounters.map((encounter, index) => (
            <section className="display-encounter" key={index} id={index}>
                <img src={encounter.encounterImage} alt={encounter.encounterName} />
                <p><span>Encounter Name</span>: <a href={encounter.encounterWebsite} target='_blank' rel='noopener noreferrer'>{encounter.encounterName}</a></p>
                <p><span>Zoo Name</span>: <a href={encounter.zooWebsite} target='_blank' rel='noopener noreferrer'>{encounter.zooName} </a></p>
                <p><span>Zoo Location</span>: {encounter.zooLocation}</p>
                <p><span>Encounter Cost</span>: {encounter.encounterCost}</p>
                <p><span>Encounter Schedule</span>: {encounter.encounterSchedule}</p>
                <p><span>Encounter Description</span>: {encounter.encounterDescription}</p>
                {this.props.currentUser === encounter.addedBy ? 
                <div>
                    <EditEncounterButton id={index} />
                    <EditEncounterFields />
                    <EditEncounter id={index} encounterId={encounter._id} />
                    <DeleteEncounterButton id={index} />
                    <DeleteEncounter id={index} encounterId={encounter._id} /></div> : null }
            </section>
        ));

    return (
        <div>
        <div>
            <h2 className='encounters-header'>{this.props.encounterType} Encounters</h2>
            <button type='button' className='all-encounters' onClick={this.onClick}>Show All Encounters</button>
            {encounters}
        </div>
        </div>
    );
}
}

const mapStateToProps = state => ({
    encounters: state.encounters,
    currentUser: state.currentUser,
    encounterType: state.encounterType
  });
  
  export default connect(mapStateToProps)(DisplayEncounter);