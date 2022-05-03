import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {

    // let expenseContent = <p>No expenses found</p>;

    // props.returnFilteredArray(filteredArray);

    if(props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses</h2>;
    };

    return (
        // <div>
        //     {props.items.map(expense => 
        //     <ExpenseItem
        //         key={expense.id} 
        //         title={expense.title} 
        //         amount={expense.amount} 
        //         date={expense.date}
        //     />)
        //     }
        // </div>
        <ul className="expenses-list">
            {props.items.map(expense => 
                <ExpenseItem
                    key={expense.id} 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                />)
            }
        </ul>
    )
};

export default ExpensesList;