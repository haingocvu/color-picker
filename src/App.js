import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container mt30">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="panel panel-primary">
                              <div className="panel-heading">
                                    <h3 className="panel-title">Color Picker</h3>
                              </div>
                              <div className="panel-body">
                                    Panel content
                              </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="panel panel-warning">
                              <div className="panel-heading">
                                    <h3 className="panel-title">Size: 15px</h3>
                              </div>
                              <div className="panel-body">
                                    <button type="button" className="btn btn-success">Increase</button>&nbsp;
                                    <button type="button" className="btn btn-success">Decrease</button>
                              </div>
                        </div>
                        <button type="button" className="btn btn-primary">Reset</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <p>Color: red - Font size: 15px</p>
                        <div id="setting-content">Setting Content</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
