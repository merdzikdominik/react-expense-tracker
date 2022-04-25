import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: 'numeric'});
    const year = props.date.getFullYear();

    return (
        <div className="expense-date-container">
            <div>{ month }</div>
            <div className="expense-date-year">{ year }</div>
            <div className="expense-date-day">{ day }</div>
        </div>
    );
}

export default ExpenseDate;