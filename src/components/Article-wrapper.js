import React, {Component} from 'react';
import NewsItem from "./NewsItem";
import CommentForm from "./CommentForm";
import {connect} from "react-redux";
import {addNewComment, watchNewsItem} from "../actionCreators/actionCreators";

class ArticleWrapper extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.watchNewsItemOnNewPage(this.props.match.params.id, this.props.match.params.topic);
    }


    render() {
        const article = this.props.article;
        return (
            <div className="articleWrapper">
                <NewsItem {...article}/>
                <CommentForm addNewComment={this.props.addNewComment}/>
                <ul className="comments">

                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        watchNewsItemOnNewPage: (id, topic) => dispatch(watchNewsItem(id, topic)),
        addNewComment: (comment) => dispatch(addNewComment(comment))
    }
};

const mapStateToProps = (state) => {
    return {article: state.putArticlesToStore.article || {},
            comments: state.comments || []
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleWrapper);