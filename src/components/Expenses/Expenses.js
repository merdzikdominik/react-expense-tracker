import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

const Expenses = (props) => {
    const [year, setYear] = useState('2019');

    const getDropdownValue = (dropdownValue) => {
        setYear(dropdownValue);
    };

    const filterArrayToReceiveSelectedYear = (expense) => {
        return String(expense.date.getFullYear()) === year;
    };

    const filteredArray = props.items.filter(filterArrayToReceiveSelectedYear);

    // let expenseContent = <p>No expenses found</p>;

    // if(filteredArray.length > 0) {
    //     expenseContent = filteredArray.map(expense => 
    //         <ExpenseItem
    //             key={expense.id} 
    //             title={expense.title} 
    //             amount={expense.amount} 
    //             date={expense.date}
    //         />)
    // };

    return (
        <Card className="expenses">
            <ExpensesFilter selectedValue={year} onChangeFilter={getDropdownValue}/>
            <ExpensesList items={filteredArray} />
        </Card>
    );
};

export default Expenses;