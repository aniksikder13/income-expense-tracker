import { Fragment, useState } from "react";
import Tracker from "../components/Tracker";

export default function Income() {
  const [income, setIncome]= useState([])

  const onIncomeHandler = (data) => {
    if(data.money && data.subject){
      setIncome([...income, data])
    }
  }

  return (
    <Fragment>
        <Tracker type='income' onIncome={onIncomeHandler} trackData= {income} />
    </Fragment>
  )
}