

const expenseReducerDefaultState = []

export default (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        
        case 'ADD_EXPENSE':
            return [...state, action.expense];

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.expenseID);

        case 'EDIT_EXPENSE':
                // const idx = state.findIndex(ex => ex.id === action.id);
                // state[idx] = action.updates; 
                // return state;
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
