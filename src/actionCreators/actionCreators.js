export const doExample = (id) => ({
    type: 'TYPE_SOMETHING',
    id
});

export const getNewsByTopic = topic => {
    return {
        type: 'SECTION_TYPE',
        topic
    };
};

export const watchNewsItem = (id) => {
    return {
        type: 'WATCH_NEWS',
        id,
    };
};

export const initializeRequest = () => ({
    type: 'REQUEST_INITIALIZED'
});


