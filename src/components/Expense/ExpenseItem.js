import React , { useState } from 'react';

import "./ExpenseItem.css";
import ExpenseDateTime from './ExpenseDateTime/ExpenseDateTime';

const ExpenseItem = (props) => {

   const [title,setTitle] = useState(props.data.title);

    const handleClick = (event) => {
        setTitle(title);
    }
     console.log("compo");

    return (
        <div className="expense-item">
            <strong>ID : {props.data.id}</strong>
            <ExpenseDateTime dateTime = {props.data.date} />
            <div className="expense-item-description">
                 <h2> {title}</h2>
                <div className="expense-price"> {props.data.amount} $ </div>
            </div>
            <button onClick={handleClick}> Button </button>
        </div>
        
    )
}


export default ExpenseItem;