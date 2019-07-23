import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = configureStore();
// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// })

store.dispatch(addExpense('Water bill', 'month of Jan', 350, 1));
store.dispatch(addExpense('Gas bill', 'first quarter', 120, 270));
store.dispatch(addExpense('Phone bill', 'February Month', 750, 300));
store.dispatch(addExpense('Home rent', 'Whole year', 324235, 250));




const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


