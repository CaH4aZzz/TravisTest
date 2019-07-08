const CreateStore = require('./redux');
const Component = require('./Component');

const store = new CreateStore(reducer);

const component1 = new Component('subscriber 1');
const component2 = new Component('subscriber 2');

store.subscribe(component1.callback);
store.subscribe(component2.callback);

store.dispatch({type: 'increase'});

setTimeout(() => {
    store.dispatch({type: 'increase'});
}, 1000);

function reducer(state = {counter: 0}, action) {
    state = {...state};

    if (action.type === 'increase') {
        state.counter++;
    }

    if (action.type === 'decrease') {
        state.counter--;
    }

    return state;
}





