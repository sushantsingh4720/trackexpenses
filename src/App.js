import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 3, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "New Laptop",
    amount: 775,
    date: new Date(2022, 8, 29),
  },
  {
    id: "e6",
    title: "Carry Bag",
    amount: 75,
    date: new Date(2022, 10, 15),
  },
  {
    id: "e7",
    title: "New Laptop",
    amount: 375,
    date: new Date(2022, 2, 10),
  },
  {
    id: "e8",
    title: "biscuit ",
    amount: 35,
    date: new Date(2019, 6, 5),
  },
  {
    id: "e9",
    title: "Bike Cover",
    amount: 85,
    date: new Date(2019, 9, 10),
  },
  {
    id: "e10",
    title: "Duffel Bag",
    amount: 93,
    date: new Date(2019, 1, 20),
  },
  {
    id: "e11",
    title: "NoteBook",
    amount: 75,
    date: new Date(2019, 5, 4),
  },
  {
    id: "e12",
    title: "Study Table",
    amount: 95,
    date: new Date(2019, 2, 10),
  },
  {
    id: "e13",
    title: "Pen",
    amount: 5,
    date: new Date(2019, 3, 7),
  },
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e14",
    title: "Chocolate",
    amount: 12,
    date: new Date(2020, 2, 4),
  },
  {
    id: "e15",
    title: "Bread",
    amount: 112,
    date: new Date(2020, 8, 24),
  },
  {
    id: "e16",
    title: "Shoes",
    amount: 120,
    date: new Date(2020, 1, 20),
  },

];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
