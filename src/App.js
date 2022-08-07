import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const initialEXpenses = [
  {
    date: new Date(),
    title: "Bike insurance",
    amount: 205.5,
    id:Math.random()
  },
  {
    date: new Date(2020,5,25),
    title: "car insurance",
    amount: 25.5,
    id:Math.random()
  },
  {
    date: new Date(2021,4,19),
    title: "Toy",
    amount: 5.5,
    id:Math.random()
  }
];
const App = () => {
  const [expenses, setExpenses] = useState(initialEXpenses);
  const onAddExpenseDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };  
  
  return (
    <div className="App">
      <NewExpenses onAddExpenseData={onAddExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
