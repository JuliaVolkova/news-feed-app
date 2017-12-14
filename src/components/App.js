import React, {Component} from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router';
import ExampleComponent from '../example'
import Main from './Main';
import Header from "./Header";
import CommentBox from "./CommentBox";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/:topic" component={Main}/>
                    <Route path="/comments" component={CommentBox}/>
                    <Route path="/example" component={ExampleComponent}/>
                </Switch>
            </div>
        );
    }
}

export default connect()(App);
