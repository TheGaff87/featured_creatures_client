import React from 'react';

export default class TextInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
    return (
        <div className='text-input'>
            <label>
                <span className='required'>{this.props.field}</span>: <input type='text' size='50' className={this.props.className} placeholder={this.props.placeholder} />
            </label>
        </div>
    )
}
}