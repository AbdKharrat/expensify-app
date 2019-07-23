import React from 'react'
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import {DateRangePicker} from 'react-dates'; 

class ExpenseListFilter extends React.Component {

    state = {
        calenderFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));

    };
    onFocusChange = (calenderFocused) => {
        this.setState(()=>({calenderFocused}))
    };
    render() {
        return (
            <div>
                <form>
                    <label>Text filter: </label>
                    <input type="text" value={this.props.filters.text} onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}>
                    </input>
                    <select
                        value={this.props.filters.sortBy}
                        onChange={(e) => {
                            e.target.value === 'date' ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount())
                        }}>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                    <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId= "Start of month"
                    endDate={this.props.filters.endDate}
                    endDateId = "End of month"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange = {() => false}
                    showClearDates ={true}

                    />
                </form>
            </div>
        )

    }

};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};
export default connect(mapStateToProps)(ExpenseListFilter);