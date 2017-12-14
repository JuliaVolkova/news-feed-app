const changeTopic = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_TOPIC':
            return Object.assign(state, {topic: action.topic});
        default:
            return state;
    }
};

export default changeTopic;