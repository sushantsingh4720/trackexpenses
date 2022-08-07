import { useState } from "react";
import "./ExpensesForm.css";
const ExpensesForm = (props) => {
  //here i change multiple input using multiple usestate
  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //how to change multiple input using one useState and use of this way is not very well
  //   const [userInput, setUserInput] = useState({
  //     EnteredTitle: '',
  //     EnteredAmount: '',
  //     EnteredDate: '',
  //   });
  //const titleChangeHandler = (event) => {
  /* setUserInput({
         ...userInput,
           EnteredTitle: event.target.value,
        });*/
  /*setUserInput((prevState) => {
      return { ...prevState, EnteredTitle: event.target.value };
    });*/
  //};

  //   const amountChangeHandler = (event) => {
  //     setUserInput({
  //         ...userInput,
  //         EnteredAmount: event.target.value,
  //       });
  //   };
  //   const dateChangeHandler = (event) => {
  //     setUserInput({
  //         ...userInput,
  //         EnteredDate: event.target.value,
  //       });
  //   };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      date: new Date(EnteredDate),
      title: EnteredTitle,
      amount: EnteredAmount,
    };
    props.onSaveForm(expenseData);
    props.onAddForm();
//after submisson the form all input initially empty
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    
      <form className="form-item" onSubmit={submitHandler}>
        <div className='new-expense__controls'>
        <div className='new-expense__controls'>
          <label>Title</label>
          <input
            type="text"
            required="required"
            value={EnteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__controls'>
          <label>Amount</label>
          <input
            type="text"
            required="required"
            value={EnteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__controls'>
          <label>Date</label>
          <input type="date" required="required" value={EnteredDate} onChange={dateChangeHandler}  />
        </div>
        </div>
        <div className='new-expense__actions'>
        <button type="button"  onClick={props.onCancelForm}>Cancel</button>
        <button type="submit" >Add Expense</button>
        </div>
      </form>
    
  );
};

export default ExpensesForm;
