import expensesTotal from '../../selectors/expenses-total'
import moment from 'moment';

const expenses1 = [{
    id: 1,
    description: 'gum',
    note: 'bought a  gum',
    amount: 300,
    createdAt: 0
}, {
    id: 2,
    description: 'rent',
    note: '',
    amount: 1999900,
    createdAt: moment(0).subtract(3, "days").valueOf()
}, {
    id: '3',
    description: 'coffee',
    note: 'starbucks ',
    amount: 700,
    createdAt: moment(0).add(3, "days").valueOf()
}];


const expenses2 = [{
    id: '3',
    description: 'coffee',
    note: 'starbucks ',
    amount: 700,
    createdAt: moment(0).add(3, "days").valueOf()
}];


test(" should find the total of the elements when there are elements", () => {

    const total = expensesTotal(expenses1);
    expect(total).toBe(1999900 + 1000);
});


test("should find 0 when there is no elements", () => {

    const total = expensesTotal([]);
    expect(total).toBe(0);
});


test("should find 1 item value only when there is no elements", () => {

    const total = expensesTotal(expenses2);
    expect(total).toBe(700);
});