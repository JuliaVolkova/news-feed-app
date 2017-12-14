import React from 'react';

const Article = ({title, url, byline, abstract, published_date}) => (
    <article>
        <a href={url}/>
        <p>{title}</p>
        <time>{published_date}</time>
        <p>{abstract}</p>
        <cite>{byline}</cite>
    </article>
);

export default Article;
