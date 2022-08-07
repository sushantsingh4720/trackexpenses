import { useState } from "react";
import Card from "../UI/Card"
import "./Expenses.css"
import ExpensesList from "./ExpensesList"
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setSelectYear] = useState('Year');
  const [filterExpenses,setFilterExpeses]=useState(props.items);
  const selectYearHandler = (selectYear) => {
    if(selectYear==="Year"){setFilterExpeses(props.items)}
    else{setFilterExpeses(props.items.filter((element) => {
      return element.date.getFullYear().toString() === selectYear;
    }))}
    
    setSelectYear(selectYear);
  };
  
   
  return (
    <div>
       <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={selectYearHandler}
      />
      
      <ExpensesChart expenses={filterExpenses} />
      <ExpensesList expenses={filterExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
