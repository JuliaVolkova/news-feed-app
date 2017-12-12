import React from 'react';
import {connect} from "react-redux";

const Header = ({topics = []}) => (
    <div className="header-wrapper">
        <h1>news feed</h1>
        <p>Read top news for free</p>
        <ul className="main-navigation">
            { topics.map((topic, index) => <li key={index}><a href="#">{topic}</a></li>) }
        </ul>
    </div>
);

const mapStateToProps = state => {
    console.log(state);
    return {
        topics: state.topics,
        current: state.currentTopic
    };
};

export default connect(mapStateToProps)(Header);