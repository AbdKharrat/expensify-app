import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


//ADD Expense
const addExpense = (description = '', note = '', amount = 0, createdAt = 0) => ({
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
const removeExpense = (expenseID) => ({
    type: "REMOVE_EXPENSE",
    expenseID

});


//EDIT EXPENSE

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates

});
//SET TEXT FILTER
const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
});
//SORT BY DATE
const soryByDate = () => ({
    type: 'SORT_BY_DATE'
});
// SORT BY AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
// SET START DATE

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
// SET END DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

const expenseReducerDefaultState = []
const expensesReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.expenseID);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            })
        default:
            return state
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };

        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }


        default:
            return state

    }

};


//get visible expenses:
const getVisibleExpenses = (expenses, {text, sortBy, startDate,endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch= typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch= typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch= expense.description.toLowerCase().includes(text.toLowerCase()) ||
        expense.note.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=> {
        if (sortBy ==='date'){
            return a.createdAt < b.createdAt? 1 : -1;
        } else {
            return a.amount < b.amount? 1 : -1;
        }
    });
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    console.log(state.filters);
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})
const expenseOne = store.dispatch(addExpense('myHome is super clean',' sss',50,1000));
const expenseTwo = store.dispatch(addExpense('myCoffee', 'ss', 300, 50));
// store.dispatch(removeExpense(expenseTwo.expense.id))
// store.dispatch(editExpense(expenseOne.expense.id, { amount: 500, note: 'It was a cold coffe :(' }));

// store.dispatch(setTextFilter('coffe'));
// store.dispatch(setTextFilter('ss'));

store.dispatch(sortByAmount());
// store.dispatch(soryByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(3000));
// store.dispatch(setEndDate());




const demoState = {
    expenses: [{
        id: 'asd',
        description: 'my rent',
        note: 'this is the last payment',
        amount: 545000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};


const user = {
    name: 'epix',
    age: 23
}
