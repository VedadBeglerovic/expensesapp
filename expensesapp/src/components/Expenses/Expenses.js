import React from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpensesList items={props.items} />
    </Card>
  );
};

export default Expenses;
