import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


const ExpenseListItem = ({ id, description, note, amount, createdAt }) => {
    // const  = props;
    return (


        <tr key={id}>
            <td>{description}</td>
            <td>{numeral(amount/100).format('$0,0.00')}</td>
            <td>{moment(createdAt).format('MMMM Do, YYYY')}</td>
            <td>{note}</td>
            <td>
                <Link to={`/edit/${id}`}><button>Edit</button></Link>

                

            </td>

        </tr>
    )
};

export default ExpenseListItem;






