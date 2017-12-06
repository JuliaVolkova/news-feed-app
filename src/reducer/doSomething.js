const doLog = (state={}, action) => {
    switch (action.type) {
        case 'TYPE_SOMETHING':
            return {
                id: action.id
            };
    }
};

export default doLog;