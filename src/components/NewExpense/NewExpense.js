import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [clicked, setClicked] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    const isClicked = () => {
        setClicked(true);
    }

    const clickedCancel = () => {
        setClicked(false);
    }

    return (
        <div className="new-expense">
            {!clicked && <button onClick={isClicked}>Add New Expense</button>}
            {clicked && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={clickedCancel}/>}
        </div>
    )
};

export default NewExpense;