import Form from "./Form"
import TrackingList from "./TrackingList"

export default function Tracker(props) {
  return (
    <div className="container">
        <Form 
          type={props.type} 
          onIncome={data => props.onIncome(data)} 
          onExpense={data => props.onExpense(data)} 
        />
        <TrackingList type={props.type} />
    </div>
  )
}