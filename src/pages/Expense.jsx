import { Fragment, useState } from "react";
import Tracker from "../components/Tracker";

export default function Expense() {
  const [expense, setExpense]= useState([])

  const onExpenseHandler = (data) => {
    if(data.money && data.subject){
      setExpense([...expense, data])
    }
  }

  return (
    <Fragment>
        <Tracker type='expense' onExpense={onExpenseHandler} trackData= {expense} />
    </Fragment>
  )
}