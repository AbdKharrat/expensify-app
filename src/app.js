import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
// import { setTextFilter } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import { addExpense } from './actions/expenses';
console.log('shiiiiiiit')

const store = configureStore();



store.dispatch(addExpense("coffe", "",300, 0));
store.dispatch(addExpense("home", "",300, 0));
store.dispatch(addExpense("rent", "",300, 0));


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


