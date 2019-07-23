import {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setEndDate,
    setStartDate
} from '../../actions/filters';
import moment from 'moment';

test("generate start date", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});


test("generate END date", () => {
    const action = setEndDate(moment(100));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(100)
    });
});


test("generate sort by amount test", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});


test("generate sort by date test", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test("generate default text filter", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
})

test("generate filled text filter", () => {
    const action = setTextFilter('hello');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'hello'
    });
})


