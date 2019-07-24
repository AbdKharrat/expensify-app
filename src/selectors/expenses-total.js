


export default (expenses) => {
    let total = 0;
    expenses.forEach(expense => {
        total += expense.amount;
    });
    return total/100;

    // return expenses.map((expense) => expense.amount).reduce((sum, value) => {
    //     sum + 0;
    //     console.log(sum,value);
    // }, 0)



};