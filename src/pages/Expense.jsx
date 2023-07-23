import { Fragment } from "react";
import Tracker from "../components/Tracker";

export default function Expense() {

  const onExpenseHandler = (data) => {
    console.log(data)
  }

  return (
    <Fragment>
        <Tracker type='expense' onExpense={onExpenseHandler} />
    </Fragment>
  )
}