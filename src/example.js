import React, { Component } from 'react';
import store from './index';
import './App.css';
// import doExample from "./actionCreators/actionCreators";

class ExampleComponent extends Component {

    handleClick() {
        console.log('working!!');
        store.dispatch( {});
    }

    render() {
        return(
            <div className="example-container">
                <button className="big-button" type="button>" onClick={ this.handleClick }  >
                    click me!
                </button>
            </div>
        )
    }
}
 export default ExampleComponent;