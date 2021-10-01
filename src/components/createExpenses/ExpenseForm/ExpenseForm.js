import React, { useState } from "react";


const ExpenseForm = () => {

    // const [title,setTitle] = useState('');
    // const [amount,setAmount] = useState('');
    // const [date,setDate] = useState('');

    const [newValue,updateValue] = useState({
        title : "",
        amount : "",
        date : ""
    });


    const titleChanged = (event) => {
        console.log("title changed" , event.target.value);
        //setTitle(event.target.value);
        updateValue({
            ...newValue,
            title : event.target.value
        });
    }

    const amountChanged = (event=>{
        console.log("title changed" , event.target.value);
        //setAmount(event.target.value);
        updateValue({
            ...newValue,
            amount : event.target.value
        });
    });

    const dateChanged = (event=>{
        console.log("title changed" , event.target.value);
        //setDate(event.target.value);
        
        updateValue({
            ...newValue,
            date : event.target.value
        });
    })
   
    return (
        <form>
            <div className="new-expense_controls">
                <div className="form-container">
                    <label>Title</label>
                    <input type="text" onChange = { titleChanged } ></input>
                </div>

                <div className="form-container">
                    <label>Amount</label>
                    <input type="number" onChange = { amountChanged }  min="0.01" step="0.01"></input>
                </div>


                <div className="form-container">
                    <label>Date</label>
                    <input type="date" onChange = { dateChanged }  min="2019-01-01" max="2022-12-31"></input>
                </div>

                <div className="expense-actions">
                    <button>Add Expense</button>
                </div>
            </div>
        </form>
    )
};

export default ExpenseForm;