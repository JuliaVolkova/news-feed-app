import React, {Component} from 'react';
import NewsItem from "./NewsItem";
import CommentForm from "./CommentForm";

class CommentBox extends Component {
    constructor() {
        super();

        this.state = {
            comments: []
        };
    }

    render() {
        return (
            <div className="commentBox">
                <NewsItem/>
                <CommentForm addComment={this.addComment.bind(this)} onSubmit={this.handleSubmit.bind(this)}/>
                <ul>
                    {this.props.comments}
                </ul>
            </div>
        )
    }

    addComment(commentBody) {
        let comment = {
            id: Math.floor(Math.random() * (9999 - this.state.comments.length + 1)) + this.state.comments.length,
            body: commentBody,
        };

        this.setState({
            comments: this.state.comments.concat([comment])
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addComment(this.body.value);
        this.body.value = '';
        this.setState({
            comments: this.state.comments.concat([comment])
        });
    }

}

export default CommentBox;
