import {connect} from "react-redux";
import React from 'react';
import Main from "./Main";
import {getArticles} from "../actionCreators/actionCreators";

const mapDispatchToProps = (dispatch) => {
    return {loadData: (topic) => dispatch(getArticles(topic))}
};

const mapStateToProps = (state) => {
    return {articles: state.putArticlesToStore.articles || []};
};
export const MainWrapper = connect(mapStateToProps, mapDispatchToProps)(Main);
