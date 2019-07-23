import uuid from 'uuid';

//ADD Expense
export const addExpense = (description = '', note = '', amount = 0, createdAt = 0) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE EXPENSE
export const removeExpense = (expenseID) => ({
    type: "REMOVE_EXPENSE",
    expenseID

});


//EDIT EXPENSE

export const editExpense = (id, updates) => {
   return  {
        type: 'EDIT_EXPENSE',
        id,
        updates
    
    };
}