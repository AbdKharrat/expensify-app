import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Remove expense test', () => {

    const action = removeExpense("123abc");
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        expenseID: '123abc'
    })
});

test('Edit the expense', () => {
    const action = editExpense('123ab', { name: 'hi' });
    expect(action).toEqual({
        id: '123ab',
        type: 'EDIT_EXPENSE',

        updates: {
            name: 'hi'
        }
    })
});

test('should add expense object with values', () => {
    const expenseData = {
        description: "coffe bill",
        amount: 300,
        note: 'it was cold, dont purchase again from starbucks',
        createdAt: 23
    };
    const action = addExpense(expenseData.description, expenseData.note, expenseData.amount, expenseData.createdAt);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Add expense without any data', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            note: '',
            createdAt: 0,
            id:expect.any(String)

        }
    })

});



