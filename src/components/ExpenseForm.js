import React from 'react';
import moment from 'moment';
import 'react-dates/initialize'; // required for newer versions of react-dates
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
const now = moment();

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            description: props.expense? props.expense.description : '',
            note: props.expense? props.expense.note : '',
            amount: props.expense? (props.expense.amount /100).toString() : '',
            createdAt:props.expense? moment(props.expense.createdAt) :  now,
            calFocused: false,
            error: false
        }
    }


    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }

    };
    onChangeDate = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))

        }
    };

    onChangeFocus = ({ focused }) => {
        this.setState(() => ({ calFocused: focused }))

    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: true }));

            return (
                <p>Please enter the description of this expense and it's amount</p>);

        } else {
            this.setState(() => ({ error: false }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note

            });
        }

    };

    render() {
        return (
            <div>
                {this.state.error && <p>Please provide description and amount</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    ></input>

                    <input
                        type='text'
                        placeholder="price"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    ></input>



                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onChangeDate}
                        focused={this.state.calFocused}
                        onFocusChange={this.onChangeFocus}
                        numberOfMonths={1}
                        isOutsideRange={() => { false }}
                    />
                    <textarea
                        placeholder="add a note to the expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    ></textarea>
                    <button>{this.props.expense ? 'Edit expense':  'Add Expense!'}</button>
                </form>
            </div>

        )
    }
}


