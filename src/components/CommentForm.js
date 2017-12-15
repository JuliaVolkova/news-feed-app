import React, {Component} from 'react';

class CommentForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="comment-form">
                <label>Add new comment</label>
                <textarea className="comment-input" placeholder="I left an awesome comment! I'm cool"/>
                <button className="form-button">post comment</button>
            </form>
        )
    }
}

export default CommentForm;
