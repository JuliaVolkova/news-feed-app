export const getArticles = topic => ({
    type: 'GET_ARTICLES',
    topic
});

export const articlesToStore = (articles = []) => ({
    type: 'ARTICLES_TO_STORE',
    articles
});

export const articleToStore = (article = {}) => ({
    type: 'ARTICLE_TO_STORE',
    article
});

export const watchNewsItem = (id, topic) => {
    return {
        type: 'WATCH_NEWS',
        id,
        topic
    };
};

export const initializeRequest = () => ({
    type: 'REQUEST_INITIALIZED'
});

