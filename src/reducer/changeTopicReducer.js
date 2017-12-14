export const putArticlesToStore = (state = {}, action) => {
    switch (action.type) {
        case 'ARTICLES_TO_STORE':
            return Object.assign({}, state, {articles: action.articles});
        case 'ARTICLE_TO_STORE':
            return Object.assign({}, state, {article: action.article});
        default:
            return state;
    }
};

