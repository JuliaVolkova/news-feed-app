import React, {Component} from 'react';
import '../App.css';
import {Route, Switch} from 'react-router';
import ExampleComponent from '../example'
import {MainWrapper} from './Main-wrapper';
import {Header} from "./Header";
import CommentBox from "./CommentBox";
import Redirect from "react-router-dom/es/Redirect";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Redirect exact from="/" to="/all-sections"/>
                    <Route path="/comments" component={CommentBox}/>
                    <Route path="/example" component={ExampleComponent}/>
                    <Route path="/:topic" render={(urlProps) => <MainWrapper {...urlProps}/>}/>
                </Switch>
            </div>
        );
    }
}

export default App;
