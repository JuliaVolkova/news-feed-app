import React, {Component}  from 'react';

class NewsItem extends Component {
    render() {
        return (
            <article className="current-article">
                <h3>title</h3>
                <time>дата публикации: 06-12-2017</time>
                <p>something about news-item</p>
                <a href="#"/>
                <cite>xyz</cite>
            </article>
        )
    }
}

export default NewsItem;