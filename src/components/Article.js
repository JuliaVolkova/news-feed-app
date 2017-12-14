import React from 'react';
import PropTypes from 'prop-types';

const Article = ({title, url, byline, abstract, published_date, media}) => (
    <article>
        <img {...media}/>
        <p>{title}</p>
        <cite>{byline}</cite>
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
