import React from 'react';
import ExpensesList from './ExpensesList';
import ExpnesesSummary from './ExpensesSummary';
const ExpenseDashboardPage = () => (
    <div>
        <ExpnesesSummary  />
        <ExpensesList />
    </div>
);

export default ExpenseDashboardPage;