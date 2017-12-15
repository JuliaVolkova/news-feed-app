import React from 'react';
import PropTypes from 'prop-types';
import Link from "react-router-dom/es/Link";

export const topics = [
    'All-sections',
    'World',
    'Politics',
    'Science',
    'Technology',
    'Books',
    'Arts'
];

export const Header = () => (
    <nav className='header-wrapper'>
        <h1 className="main-title">news feed</h1>
        <p className="welcome-words">Stay tuned and read top news for free!</p>
        <ul className='main-navigation'>
            {topics.map((topic, index) => (
                    <li key={index} className="navigation-item"><Link to={`/${topic.toLowerCase()}`}>{topic}</Link></li>
                )
            )}
        </ul>
    </nav>
);

Header.propTypes = {
    topics: PropTypes.array
};
