import React from 'react';
import PropTypes from 'prop-types';

const Article = ({title, byline, media}) => (
    <article className="article-list-item">
        <img {...media}/>
        <h2 className="article-title">{title}</h2>
        <cite className="author">{byline}</cite>
    </article>
);

Article.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    byline: PropTypes.string,
    abstract: PropTypes.string,
    published_date: PropTypes.string,
    media: PropTypes.shape({
        src: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        alt: PropTypes.string
    })
};

export default Article;
