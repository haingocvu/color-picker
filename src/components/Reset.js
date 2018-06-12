import React, { Component } from 'react';

class Reset extends Component {
    callReset = ()=>{
        this.props.onReceivedReset(true);
    }
    render() {
        return (
            <button type="button" className="btn btn-primary" onClick={ this.callReset }>Reset</button>
        );
    }
}

export default Reset;
