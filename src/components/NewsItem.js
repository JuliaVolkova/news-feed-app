import React, {Component} from 'react';

const NewsItem = ({title, url, byline, abstract, published_date}) => (
    <article className="current-article">
        <h3>{title}</h3>
        <time>дата публикации: {published_date} </time>
        <p>{abstract}</p>
        <a href={url}/>
        <cite>{byline}</cite>
    </article>
);


export default NewsItem;
