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
        console.log();
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/comments" component={CommentBox}/>
                    <Route path="/example" component={ExampleComponent}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({topicList: state.topicList});

export default connect(mapStateToProps)(App);
