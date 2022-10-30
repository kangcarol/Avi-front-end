import styles from "./EventList.module.css"
import EventCard from "../../components/EventCard/EventCard";
import { useNavigate } from "react-router-dom";


const EventList = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className={styles.event}>Event List</h1>
      <main className={styles.event}>
        <button className="btn btn-secondary"  onClick={() => {navigate("/events/new")}}>ADD AN EVENT</button>
        {props.events.map(event => (
          <EventCard event={event} key={event._id}/>
        ))}
      </main>
    </>
  )
}


export default EventList