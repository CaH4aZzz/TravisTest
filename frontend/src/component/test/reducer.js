module.exports = function reducer(state = { count : 0}, action){
    state = {...state};

    if (action.type === "INCREASE"){
        state.count++;
    }

    if (action.type === "DECREASE"){
        state.count++;
    }

    return state;
};