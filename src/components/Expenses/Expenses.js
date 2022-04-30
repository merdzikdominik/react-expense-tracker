import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [year, setYear] = useState('2019');

    const getDropdownValue = (dropdownValue) => {
        setYear(dropdownValue);
    }

    console.log(year);

    return (
        <Card className="expenses">
            <ExpensesFilter selectedValue={year} onGetDropdownValueToFilter={getDropdownValue}/>
            <ExpenseItem 
                title={props.items[0].title} 
                amount={props.items[0].amount} 
                date={props.items[0].date}>
            </ExpenseItem>
            <ExpenseItem 
                title={props.items[1].title} 
                amount={props.items[1].amount} 
                date={props.items[1].date}>
            </ExpenseItem>
            <ExpenseItem 
                title={props.items[2].title} 
                amount={props.items[2].amount} 
                date={props.items[2].date}>
            </ExpenseItem>
            <ExpenseItem 
                title={props.items[3].title} 
                amount={props.items[3].amount} 
                date={props.items[3].date}>
            </ExpenseItem>
        </Card>
    );
}

export default Expenses;