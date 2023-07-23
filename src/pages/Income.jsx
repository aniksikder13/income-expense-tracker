import { Fragment } from "react";
import Tracker from "../components/Tracker";

export default function Income() {

  const onIncomeHandler = (data) => {
    console.log(data)
  }

  return (
    <Fragment>
        <Tracker type='income' onIncome={onIncomeHandler} />
    </Fragment>
  )
}