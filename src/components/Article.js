import React from 'react';

const Article = ({title, url, byline, abstract}) => (
    <article>
        <a href={url}/>
        <p>{title}</p>
        <p>{abstract}</p>
        <cite>{byline}</cite>
    </article>
);

export default Article;
