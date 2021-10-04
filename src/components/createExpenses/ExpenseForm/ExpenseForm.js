import React, { useState } from "react";


const ExpenseForm = () => {

    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [date,setDate] = useState('');

    const titleChanged = (event) => {
        setTitle(event.target.value)
     };
     const amountChanged = (event) => {
        setAmount(event.target.value)
     };
     const dateChanged = (event) => {
        setDate(event.target.value)
     };


    // const [newValue , setNewValue] = useState({
    //     title : '',
    //     amount : '',
    //     date : ''
    // });

    // const titleChanged = (event) => {
    //     console.log('titleChanged------');
    //     // setNewValue({
    //     //     ...newValue,
    //     //     title : event.target.value
    //     // })

    //     setNewValue((previousState) =>{
    //         return {
    //             ...previousState,
    //             title : event.target.value
    //         }
    //     })
    // }

    // const amountChanged = (event) => {
    //     setNewValue({
    //         ...newValue,
    //         amount : event.target.value
    //     })
    // }

    // const dateChanged = (event) => {
    //     setNewValue({
    //         ...newValue,
    //         amount : event.target.value
    //     })
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
       const expenseData = {
           title : title,
           amount : amount,
           date : new Date(date)
       }

       console.log("expenseData------",expenseData);
       setTitle('');
       setAmount('');
       setDate('');


    }
   
    return (
        <form onSubmit = {handleSubmit}>
            <div className="new-expense_controls">
                <div className="form-container">
                    <label>Title</label>
                    <input type="text" onChange = { titleChanged } value = {title} ></input>
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