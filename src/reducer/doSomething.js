const doLog = (state={}, action) => {
    switch (action.type) {
        case 'TYPE_SOMETHING':
            return {
                id: action.id
            };
        default:
            return {
                message: 'hello! I am reducer'
            }
    }
};

export default doLog;