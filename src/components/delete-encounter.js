import React from 'react';
import { connect } from 'react-redux';
import {deleteEncounter} from '../actions';

export class DeleteEncounter extends React.Component {
    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        const token = this.props.authToken;
        const id = this.props.encounterId;
        console.log(id);
        this.props.dispatch(deleteEncounter(token, id));
    }

    render () {
        if (this.props.showDeleteEncounter && this.props.currentDeleteForm===this.props.id) {   
            return (
                <section>
                    <p className='permanent-delete'>Are you sure you wish to permanently delete this encounter?</p>
                        <button type="button" className="delete-encounter-final" onClick={this.onClick}>Permanently delete this encounter</button>
                </section>
            )
        }else{
        return null
    }
}
}

const mapStateToProps = state => ({
    showDeleteEncounter: state.showDeleteEncounter,
    authToken: state.authToken,
    currentDeleteForm: state.currentDeleteForm
  });
  
  export default connect(mapStateToProps)(DeleteEncounter);