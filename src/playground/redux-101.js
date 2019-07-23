import { createStore } from 'redux';

const incrementCount = (increaseBy = 1) => ({ // i changed the syntax he provided in lesson 90 M 7;
    type: 'INCREMENT',
    increaseBy: typeof increaseBy === 'number' ? increaseBy : 1

});

const decrementBy = (decreaseBy = 1) => ({
    type: 'DECREMENT',
    decreaseBy: typeof decreaseBy === 'number' ? decreaseBy : 1
});


const set = (set = 100) => ({
    type: 'SET',
    set
});
const reset = () => ({ type: 'RESET' });

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.increaseBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decreaseBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.set
            }
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsub = store.subscribe(() => {// starts logging the data with every change
    console.log(store.getState());
})
store.dispatch(incrementCount(5));
store.dispatch(incrementCount(2));
store.dispatch(incrementCount(3));
store.dispatch(reset('asf'));
store.dispatch(set(2030));
store.dispatch(decrementBy(800));
store.dispatch(decrementBy('sd'));

unsub(); // to stop reading all the changes
store.dispatch(decrementBy());
