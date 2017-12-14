import React, {Component} from 'react';
import NewsItem from "./NewsItem";
import CommentForm from "./CommentForm";

class ArticleWrapper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="articleWrapper">
                <NewsItem article={{}}/>
                <CommentForm/>
            </div>
        )
    }
}



export default ArticleWrapper;