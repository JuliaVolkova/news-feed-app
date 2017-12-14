export const putArticlesToStore = (state = {}, action) => {
    switch (action.type) {
        case 'ARTICLES_TO_STORE':
            const assign = Object.assign({}, {articles: action.articles});
            console.log( 'in reducer',action, assign);
            return assign;
        case 'GET_ARTICLES':
            return {};
        default:
            return state;
    }
};
