import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses'

const AddExpensePage = (props) => (
    <div>

        <h1>Create a new expense</h1>
        <ExpenseForm onSubmit={(expense) => {
            props.dispatch(addExpense(expense.description,expense.note,expense.amount,expense.createdAt));
            props.history.push('/');

        }} />
    </div>
);

export default connect()(AddExpensePage);
