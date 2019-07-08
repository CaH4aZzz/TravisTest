module.exports = function CreateStore(reducer) {
    let state;
    let subscribers = [];

    this.reducer = reducer;

    this.dispatch = (action) => {
        state = this.reducer(state, action);
        subscribers.forEach((s) => s(state));
    };

    this.subscribe = (cb) => {
        subscribers.push(cb);
    };
};