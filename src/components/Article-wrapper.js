import React, {Component} from 'react';
import NewsItem from "./NewsItem";
import CommentForm from "./CommentForm";
import {connect} from "react-redux";
import {watchNewsItem} from "../actionCreators/actionCreators";

class ArticleWrapper extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.watchNewsItemOnNewPage(this.props.match.params.id, this.props.match.params.topic);
    }

    render() {
        const article = this.props.article;
        return(
            <div className="articleWrapper">
                <NewsItem {...article}/>
                <CommentForm/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {watchNewsItemOnNewPage: (id, topic) => dispatch(watchNewsItem(id, topic))}
};

const mapStateToProps = (state) => {
    return {article: state.putArticlesToStore.article || {}};
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleWrapper);