import React, {Component} from 'react';

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            author: '',
            body: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({author: event.target.value});
    }

    handleTextareaChange(event) {
        this.setState({body: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.author || !this.state.body) {
            alert('Please enter your name and comment.');
        }
        const comment = {
            id: Math.floor(Math.random() * 10000),
            author: this.state.author,
            body: this.state.body
        };

        this.props.addNewComment(comment);

    }

    render() {
        return (
            <form className="comment-form" onSubmit={this.handleSubmit}>
                <label>Add new comment</label>
                <input className="commentAuthorName" placeholder="Please, enter your name"  onChange={this.handleInputChange}/>
                <textarea className="comment-input" placeholder="I left an awesome comment! I'm cool" onChange={this.handleTextareaChange}/>
                <button className="form-button">post comment</button>
            </form>
        )
    }
}

export default CommentForm;
