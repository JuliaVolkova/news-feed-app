import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from "./Article";
import {Link} from "react-router-dom";

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.loadData(this.props.match.params.topic);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.topic !== nextProps.match.params.topic) {
            this.props.loadData(nextProps.match.params.topic);
        }
    }

    render() {
        return (
            <div className="news-wrapper">
                <ul className="news-grid">
                    {this.props.articles.map((article, index) => (
                        <li key={index} className="news">
                            <Link to={`${this.props.match.params.topic}/article/${index}`} className="article">
                                <Article {...article} className="article-list-item"/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    };
}

Main.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape(Article.propTypes))
};

export default Main;
