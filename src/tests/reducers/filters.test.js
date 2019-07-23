import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should test default filters reducer',() => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual ({
        text: '',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    }); 
}) 
test ("should test sory by amount ", () => {
    const state= filtersReducer(undefined , {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
})

test ("should test sory by date ", () => {
    const currentState= {
        text: "",
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_BY_DATE'};
    const state= filtersReducer(currentState , action);
    expect(state.sortBy).toBe('date');
});

test ("should set text filter from filled to empty ", () => {
    const currentState= {
        text: "asd gsdgqwe",
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SET_TEXT_FILTER', text: "hi"};
    const state= filtersReducer(currentState , action);
    expect (state.text).toBe( action.text);
});


test ("should set start date filter ", () => {
    const currentState= {
        text: "asd gsdgqwe",
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SET_START_DATE', startDate: 0};
    const state= filtersReducer(currentState , action);
    expect (state.startDate).toBe( action.startDate);
});

test ("should set end date filter ", () => {
    const currentState= {
        text: "asd gsdgqwe",
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SET_END_DATE', endDate: 0};
    const state= filtersReducer(currentState , action);
    expect (state.startDate).toBe( action.startDate);
});


