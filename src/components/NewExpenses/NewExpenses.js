import "./NewExpenses.css";
import { useState } from "react";
import ExpensesForm from "./ExpensesForm";
const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveFormHandler = (Enteredformdetail) => {
    const expenseData = {
      ...Enteredformdetail,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
  };

  const startEditngHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditngHandler}>Add new Expense!</button>
      )}
      {isEditing && (
        <ExpensesForm
          onSaveForm={onSaveFormHandler}
          onCancelForm={stopEditingHandler}
          onAddForm={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpenses;
