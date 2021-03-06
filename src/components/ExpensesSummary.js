import React from 'react';
import { connect } from 'react-redux'
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpnesesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? "expense" : "expenses";
    return (
        <div>
            <h3>viewing {expensesCount} {expenseWord} with total amount of {numeral(expensesTotal).format('$0,0.00')}  </h3>
        </div>
    );
}
const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters) || [];
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};
export default connect(mapStateToProps)(ExpnesesSummary);

// export default ExpnesesSummary;