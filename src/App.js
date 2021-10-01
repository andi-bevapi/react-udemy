// import logo from './logo.svg';
import './App.css';

import ExpenseItem from "./components/Expense/ExpenseItem";
import Card from './components/UI/Card/Card';
import NewExpenses from "./components/createExpenses/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id : 1,
      title: 'monitor',
      amount : '220',
      date : new Date(2020,9,28)
    },
    {
      id : 2,
      title: 'PC',
      amount : '950',
      date : new Date(2020,9,28)
    },
    {
      id : 3,
      title: 'keyboard',
      amount : '35',
      date : new Date(2020,9,28)
    },
    {
      id : 4,
      title: 'mouse',
      amount : '15',
      date : new Date(2020,9,28)
    },
  ]
  return (
    <div className="App">
        <div>
          <Card class="expenses">
            <NewExpenses></NewExpenses>
            <ExpenseItem data={expenses[0]}></ExpenseItem>
          </Card>
        </div>
      </div>
  );
}

export default App;
