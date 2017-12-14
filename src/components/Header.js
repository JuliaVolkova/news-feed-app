import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'

const Header = ({topics = [], current}) => (
    <div className='header-wrapper'>
        <h1>news feed</h1>
        <p>Read top news for free</p>
        <ul className='main-navigation'>
            {topics.map((topic, index) => (
                    <li key={index}><NavLink to={`/${topic.toLowerCase()}` }>{topic}</NavLink></li>
                )
            )}
        </ul>
    </div>
);

const mapStateToProps = state => ({
    topics: [
        'World',
        'Politics',
        'Science',
        'Technology',
        'Books',
        'Art'
    ],
});

export default connect(mapStateToProps)(Header);