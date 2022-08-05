import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      today: new Date().toLocaleDateString(),
      title: "Bike insurance",
      amount: 205.5,
    },
    {
      today: new Date().toLocaleDateString(),
      title: "Car Insurance",
      amount: 923.5,
    },
    {
      today: new Date().toLocaleDateString(),
      title: "cycle insurance",
      amount: 6123.5,
    },
  ];
  return (
    <div className="App">
      <h1>Hii! I'm Sushant singh</h1>
      <ExpenseItem
        title={expenses[0].title}
        today={expenses[0].today}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        today={expenses[1].today}
        amount={expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        today={expenses[2].today}
        amount={expenses[2].amount}
      ></ExpenseItem>
    
    </div>
  );
}

export default App;
