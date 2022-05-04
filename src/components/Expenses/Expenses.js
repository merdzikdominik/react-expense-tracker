import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

const Expenses = (props) => {
    const [year, setYear] = useState('2019');

    const getDropdownValue = (dropdownValue) => {
        setYear(dropdownValue);
    };

    const filterArrayToReceiveSelectedYear = (expense) => {
        return String(expense.date.getFullYear()) === year;
    };

    const filteredExpenses = props.items.filter(filterArrayToReceiveSelectedYear);

    return (
        <Card className="expenses">
            <ExpensesFilter selectedValue={year} onChangeFilter={getDropdownValue}/>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
};

export default Expenses;