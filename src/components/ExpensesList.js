import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import ExpenseListFilter from './ExpenseListFilter';

const ExpenseList = (props) => {
    return (
        <div>
            <br />
            <br />
            <h1>Expenses List:</h1>
            <br />
            <br />
            <ExpenseListFilter />
            <table>
                <thead key={'title'}>
                    <tr>
                        <td>Expense discription</td>
                        <td>Expense amount</td>
                        <td>Created at</td>
                        <td>Expense note</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {props.expenses.map((expense) => {
                        return (
                            <ExpenseListItem key={expense.id} {...expense}  {...props} />
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, { ...state.filters })
    };
};
export default connect(mapStateToProps)(ExpenseList);
