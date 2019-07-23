import moment from 'moment';

export default  [{
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
