import React, {Component}  from 'react';

class CommentForm extends Component {
    render() {
        return (
            <form className="comment-form">
                <label>Add new comment</label>
                <textarea placeholder="I left an awesome comment! I'm cool"/>
                <button>post comment</button>
            </form>
        )
    }
}

export default CommentForm;