import Form from "./Form"
import TrackingList from "./TrackingList"

export default function Tracker(props) {
  return (
    <div className="container">
        <Form type={props.type} />
        <TrackingList type={props.type} />
    </div>
  )
}