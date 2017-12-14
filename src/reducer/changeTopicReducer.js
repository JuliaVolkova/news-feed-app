export const getArticlesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ARTICLES':
            return state;
        default:
            return state;
    }
};

export const putArticlesToStore = (state = {}, action) => {
    switch (action.type) {
        case 'ARTICLES_TO_STORE':
            const assign = Object.assign({}, {articles: action.articles});
            return assign;
        default:
            return state;
    }
};
