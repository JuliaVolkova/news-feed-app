import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types';

const Header = ({topics = [], current}) => (
    <div className='header-wrapper'>
        <h1>news feed</h1>
        <p>Read top news for free</p>
        <ul className='main-navigation'>
            {topics.map((topic, index) => (
                    <li key={index} ><NavLink to={`/${topic.toLowerCase()}` }>{topic}</NavLink></li>
                )
            )}
        </ul>
    </div>
);

Header.propTypes = {
    topics: PropTypes.array
};

const mapStateToProps = state => ({
    topics: [
        'All-sections',
        'World',
        'Politics',
        'Science',
        'Technology',
        'Books',
        'Arts'
    ],
});

export default connect(mapStateToProps)(Header);

// function mapStateToProps(state) {
//     return {
//         newsFeed: state.newsFeed,
//     };
// };
//
// function mapDispatchToProps(dispatch, {tag}) {
//     dispatch(loadNews(tag || 'all-sections'));
//     return {};
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);