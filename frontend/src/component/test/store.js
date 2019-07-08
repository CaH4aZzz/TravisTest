module.exports = function createStore(reducer) {
    let state;
    let subscribers = [];

    this.reducer = reducer;

    this.dispatch = (action) => {
        state = reducer(state, action);
        subscribers.forEach((subscriber) => subscriber(state))
    };

    this.subscribe = (callback) => {
        subscribers.push(callback)
    };
};