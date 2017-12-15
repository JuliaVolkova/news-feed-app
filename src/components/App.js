import React, {Component} from 'react';
import '../App.css';
import {Route, Switch} from 'react-router';
import {MainWrapper} from './Main-wrapper';
import {Header, topics} from "./Header";
import Redirect from "react-router-dom/es/Redirect";
import ArticleWrapper from "./Article-wrapper";
import Footer from "./Footer";
import NotFound from "./Not found";

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
                    <Route exact path="/:topic/article/:id" component={ArticleWrapper}/>
                    <Route exact path={`/:topic(${topics.join('|')})`} render={(urlProps) => <MainWrapper {...urlProps}/>}/>
                    <Route component={NotFound}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;
