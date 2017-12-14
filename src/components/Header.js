import React from 'react';
import PropTypes from 'prop-types';
import Link from "react-router-dom/es/Link";

const topics = [
    'All-sections',
    'World',
    'Politics',
    'Science',
    'Technology',
    'Books',
    'Arts'
];

export const Header = () => (
    <div className='header-wrapper'>
        <h1>news feed</h1>
        <p>Read top news for free</p>
        <ul className='main-navigation'>
            {topics.map((topic, index) => (
                    <li key={index}><Link to={`/${topic.toLowerCase()}`}>{topic}</Link></li>
                )
            )}
        </ul>
    </div>
);

Header.propTypes = {
    topics: PropTypes.array
};
