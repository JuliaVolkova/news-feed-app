import React from 'react';
import PropTypes from 'prop-types';

const Article = ({title, url, byline, abstract, published_date}) => (
    <article>
        <a href={url}/>
        <p>{title}</p>
        <time>{published_date}</time>
        <p>{abstract}</p>
        <cite>{byline}</cite>
    </article>
);

Article.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    byline: PropTypes.string,
    abstract: PropTypes.string,
    published_date: PropTypes.string
};

export default Article;
