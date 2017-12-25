export const getComments = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return Object.assign({}, state, {comment: action.comment});
        case 'GET_COMMENTS':
            return Object.assign({}, state, {comments: action.comments});
        default:
            return state;
    }
};
