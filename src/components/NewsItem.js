import React, {Component} from 'react';
import PropTypes from 'prop-types';

const NewsItem = ({title, url, byline, abstract, published_date, media}) => (
    <article className="current-article">
        <h2>{title}</h2>
        <img {...media} />
        <p className="description">{abstract}</p>
            <cite className="author">{byline}</cite>
            <time className="published-date"> {published_date} </time>
        <a href={url} className="news-item-link">Read more</a>
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
