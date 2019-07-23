import React from 'react';
import {Link} from 'react-router-dom';


const ExpenseListItem = ({ id, description, note, amount, createdAt }) => {
    // const  = props;
    return (


        <tr key={id}>
            <td>{description}</td>
            <td>{amount}</td>
            <td>{createdAt}</td>
            <td>{note}</td>
            <td>
                <Link to={`/edit/${id}`}><button>Edit</button></Link>

                

            </td>

        </tr>
    )
};

export default ExpenseListItem;






