import React, {Component} from 'react';
import PropTypes from 'prop-types';

const NewsItem = ({title, url, byline, abstract, published_date, media}) => (
    <article className="current-article">
        <h3>{title}</h3>
        <img {...media}/>
        <time>дата публикации: {published_date} </time>
        <p>{abstract}</p>
        <a href={url}>Read more</a>
        <cite>{byline}</cite>
    </article>
);

NewsItem.propTypes = {
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

export default NewsItem;
