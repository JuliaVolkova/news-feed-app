import React, { Component } from 'react';
import { dispatch } from 'redux';
import './App.css';



class ExampleComponent extends Component {

    render() {
        return(
            <div className="example-container">
                <button className="big-button" type="button>" onClick={ console.log('working!!')} >
                    click me!
                </button>
            </div>
        )
    }
}
 export default ExampleComponent;