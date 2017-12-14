import React, {Component} from 'react';
import '../App.css';
import {Route, Switch} from 'react-router';
import ExampleComponent from '../example'
import {MainWrapper} from './Main-wrapper';
import {Header} from "./Header";
import Redirect from "react-router-dom/es/Redirect";
import ArticleWrapper from "./Article-wrapper";

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
                    <Route path="/:topic/article/:id" component={ArticleWrapper}/>
                    <Route path="/example" component={ExampleComponent}/>
                    <Route path="/:topic" render={(urlProps) => <MainWrapper {...urlProps}/>}/>
                </Switch>
            </div>
        );
    }
}

export default App;
