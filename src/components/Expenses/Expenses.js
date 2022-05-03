import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
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

    return (
        <Card className="expenses">
            <ExpensesFilter selectedValue={year} onChangeFilter={getDropdownValue}/>
            {filteredArray.length === 0 
                ? (<p>No products</p>) 
                : (filteredArray.map(expense => 
                    <ExpenseItem
                        key={expense.id} 
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}
                    />))
            }
        </Card>
    );
};

export default Expenses;