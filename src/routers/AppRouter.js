import React from 'react';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import HelpPage from '../components/HelpPage'
import EditPage from '../components/EditPage';
import WrongURL from '../components/WrongURL';
import Header from '../components/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route path="/edit/:id" component={EditPage} />
                <Route component={WrongURL} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;