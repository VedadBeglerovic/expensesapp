import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import { useRef, useEffect } from 'react';
import Wrapper from "./components/Helpers/Wrapper";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    description: "description1",
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2020, 2, 12),description: "description2", },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    description: "description3",
  },
  { id: "e4", title: "New PC", amount: 1450, date: new Date(2021, 4, 11), description: "description4", },
  { id: "e5", title: "New shoes", amount: 150, date: new Date(2021, 5, 12),description: "description5", },
  { id: "e6", title: "New TV", amount: 450, date: new Date(2021, 6, 2), description: "description6", },
  { id: "e7", title: "Toilet Paper", amount: 94.12, date: new Date(2021, 7, 25),description: "description7", },
  { id: "e8", title: "New Desk", amount: 300, date: new Date(2021, 8, 2),description: "description8", },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [showForm, setShowForm] = useState(false);

  const elementRef = useRef();

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  useEffect(() => {
    const divElement = elementRef.current;
    console.log(divElement); 
  }, []);

  const show = () => {
    setShowForm(!showForm);
  }

  return (
    <div className="App">
      <div ref={elementRef}> 
          <button className="addNew" onClick={show}>Add New Expense</button>
          <Wrapper>
          {showForm && (<ExpenseForm onAddExpenseData={addExpenseHandler} />)}
          <Expenses items={expenses} />
        </Wrapper>
      </div>
    </div>
  );
}

export default App;
