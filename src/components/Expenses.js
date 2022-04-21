import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {

    return (
        <div className="expenses">
            <ExpenseItem 
                title={props.expensesAttribute[0].title} 
                amount={props.expensesAttribute[0].amount} 
                date={props.expensesAttribute[0].date}>
            </ExpenseItem>
            <ExpenseItem 
                title={props.expensesAttribute[1].title} 
                amount={props.expensesAttribute[1].amount} 
                date={props.expensesAttribute[1].date}>
            </ExpenseItem>
            <ExpenseItem 
                title={props.expensesAttribute[2].title} 
                amount={props.expensesAttribute[2].amount} 
                date={props.expensesAttribute[2].date}>
            </ExpenseItem>
            <ExpenseItem 
                title={props.expensesAttribute[3].title} 
                amount={props.expensesAttribute[3].amount} 
                date={props.expensesAttribute[3].date}>
            </ExpenseItem>
        </div>
    );
}

export default Expenses;