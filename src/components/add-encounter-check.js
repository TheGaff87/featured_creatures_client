import React from 'react';
import { connect } from 'react-redux';
import {hideAddEncounterCheck} from '../actions';

export function AddEncounterCheck(props) {

    function onClick(e) {
        props.dispatch(hideAddEncounterCheck());
    }

    if (props.showAddEncounterCheck) {
    return (
        <div className='add-encounter-check'>
            <p className='animal-singular'>Did you use the singular form for this animal? If not, please change it.</p>
            <button type='button' onClick={e => onClick(e)} className='singular-button'>Yes, I used the singular!</button>
        </div>
    )
    }else{
        return null
    }
}

const mapStateToProps = state => ({
    showAddEncounterCheck: state.showAddEncounterCheck
  });
  
  export default connect(mapStateToProps)(AddEncounterCheck);