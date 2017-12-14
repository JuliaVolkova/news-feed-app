import React, {Component} from 'react';
import NewsItem from "./NewsItem";
import CommentForm from "./CommentForm";

class CommentBox extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="commentBox">
                <NewsItem/>
                <CommentForm/>
            </div>
        )
    }
}

export default CommentBox;
