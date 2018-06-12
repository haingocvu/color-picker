import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                'red',
                'green',
                'blue',
                '#ccc'
            ]
        }
    }

    changeColor(color){
        this.props.onReceivedColor(color);
    }
    
    render() {
        //Must use arrow function in Onclick
        let showColor = this.state.colors.map((color, index)=>{
            return <span className={ this.props.color===color?'active':'' } 
            key={ index } style={{background: color}} 
            onClick={ ()=>this.changeColor(color) }/>
        })
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Color Picker</h3>
                        </div>
                        <div className="panel-body">
                            { showColor }
                        </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;
