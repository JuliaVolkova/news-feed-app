export const getArticles = topic => ({
    type: 'GET_ARTICLES',
    topic
});

export const articlesToStore = (articles = []) => ({
    type: 'ARTICLES_TO_STORE',
    articles
});

export const watchNewsItem = id => {
    return {
        type: 'WATCH_NEWS',
        id
    };
};

export const initializeRequest = () => ({
    type: 'REQUEST_INITIALIZED'
});

