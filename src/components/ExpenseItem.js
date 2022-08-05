import './ExpenseItem.css';

function ExpenseItem(props) {
    // const today = new Date().toLocaleDateString();
    // const title="Car Insurance";
    // const amount=635.5;
  return (
    <div className="Expense-item">
      <div className="Expense-item_description" >
        <h2>{props.today}</h2>
        <h1>{props.title}</h1>
        <h1>${props.amount}</h1>
      </div>
    </div>
  );
}

export default ExpenseItem;
