import {connect} from "react-redux";
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from "./Article";
import {getArticles} from "../actionCreators/actionCreators";

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(getArticles(this.props.match.params.topic));
        console.log('in console', this.props.match.params.topic);
    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <div className="news-wrapper">
                <h2>top news</h2>
                <ul className="news-grid">
                    {this.props.articles.map((article, index) => (
                        <li key={index} className="news">
                            <Article {...article}/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    };
}

Main.propTypes = {
    articles: PropTypes.array
};

const mapStateToProps = (state) => {
    console.log('Main', state);
    return {articles: state.putArticlesToStore.articles || []};
};

export default connect(mapStateToProps)(Main);