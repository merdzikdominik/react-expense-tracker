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
    // const filteredItems = props.items.filter(productByYear => console.log(productByYear.date.getFullYear(year)));
    // console.log(filteredItems);

    return (
        <Card className="expenses">
            <ExpensesFilter selectedValue={year} onChangeFilter={getDropdownValue}/>
            {props.items.map(expense => 
                <ExpenseItem
                    key={expense.id} 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                />)
            }
        </Card>
    );
}

export default Expenses;