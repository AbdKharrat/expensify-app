import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'
import moment from 'moment';

test('default state test', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
});

test("remove expense by id", () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expenseID: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])

});

test("should not remove expenses if id not found", () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expenseID: -33
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)

});

test("should test add expense reducer", () => {
    const expense = {
        description: "bought juice",
        amount: '30',
        createdAt: 0,
        note: ''
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        action.expense
    ]);
});

test("edit an expense with valid id ", () => {
    const note = 'hello there';
    const action = {
        type: 'EDIT_EXPENSE',
        id: 2,
        updates: {
            note
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], {
        id: 2,
        description: 'rent',
        note: note,
        amount: 1999900,
        createdAt: moment(0).subtract(3, "days").valueOf()
    }, expenses[2]]);
});
test("edit an expense with invalid id ", () => {
    const note = 'hello there';
    const action = {
        type: 'EDIT_EXPENSE',
        id: "23212",
        updates: {
            note
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});