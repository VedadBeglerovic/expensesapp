import React , { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import 'react-dropdown/style.css';
import Select from 'react-select';


const ExpensesList = (props) => {
  const [valueState,setValueState] = useState("")
  const [amountState,setAmountState] = useState(0)
  

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  const handler = (event) => {
    const value = event.value
    setValueState(value)
  }

  const amountHandler = (event) => {
    const value = event.value
    setAmountState(value)
}


  const options = [];
  for(var i=0;i<props.items.length;i++){
    const item = {
      value: props.items[i].title,
      label: props.items[i].title
    }
    options.push(item);
  }

  const amountOptions = [];
  for(var i=0;i<props.items.length;i++){
    const item = {
      value: props.items[i].amount,
      label: props.items[i].amount
    }
    amountOptions.push(item);
  }
  
  
  return (
    <React.Fragment> 
      <Select className="dropdown" options={options} onChange={handler} />
      <Select className="dropdown" options={amountOptions} onChange={amountHandler} />
      <ul className="expenses-list">
        {props.items.filter(expense => ((expense.title===valueState || valueState===''))).filter(expense => (expense.amount===amountState || amountState===0) ).map((expense) => (
          <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            description = {expense.description}
          />
        ))}
      </ul>
      </React.Fragment>   
  );
};

export default ExpensesList;
