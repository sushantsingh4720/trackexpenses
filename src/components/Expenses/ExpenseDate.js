import "./ExpenseDate.css"

const ExpenseDate = (props) => {
  const month = props.today.toLocaleString('default', { month: 'long' });;
  const day = props.today.toLocaleString('en-US', { day: '2-digit' });
  const year = props.today.getFullYear();
  return (
    <div className='expense-date'>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
    </div>
  );
};
export default ExpenseDate;
