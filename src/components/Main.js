import {connect} from "react-redux";
import React from 'react';
import Article from "./Article";

const Main = ({ articles = [] }) => (
    <div className="news-wrapper">
        <h2>top news</h2>
        <ul className="news-grid">
            { console.log(articles) }
            { articles.map((article, index) => (
                <li key={index}>
                    <Article {...article}/>
                </li>
            )) }
        </ul>
    </div>
);

const mapStateToProps = state => {
    console.log(state);
    return {articles: state.articles};
};

export default connect(mapStateToProps)(Main);