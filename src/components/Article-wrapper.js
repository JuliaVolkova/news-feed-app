import React, {Component} from 'react';
import NewsItem from "./NewsItem";
import CommentForm from "./CommentForm";
import {connect} from "react-redux";
import {addNewComment, getComments, watchNewsItem} from "../actionCreators/actionCreators";

class ArticleWrapper extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.watchNewsItemOnNewPage(this.props.match.params.id, this.props.match.params.topic);
        this.props.getCommentsList(this.props.article.id);
    }

    render() {
        const article = this.props.article;
        const comments = this.props.comments;
        return (
            <div className="articleWrapper">
                <NewsItem {...article}/>
                <CommentForm addNewComment={this.props.addNewComment(article.id)}/>
                <ul className="comments">
                    {comments.map(comment => (
                        <li key={comment.id} className="comment-item">{comment}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        watchNewsItemOnNewPage: (id, topic) => dispatch(watchNewsItem(id, topic)),
        addNewComment: id => comment => dispatch(addNewComment(id, comment)),
        getCommentsList: id => dispatch(getComments(id))
    }
};

const mapStateToProps = (state) => {
    return {
        article: state.putArticlesToStore.article || {},
        comments: state.getComments.comments || []
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleWrapper);