import styles from "./EventList.module.css"
import EventCard from "../../components/EventCard/EventCard";
import { useNavigate } from "react-router-dom";

const EventList = (props) => {
  console.log("eventlist props:", props);
  const navigate = useNavigate();
  return (
    <>
      <main className={styles.container}>
        <button onClick={() => {navigate("/events/new")}}>add an event</button>
        {props.events.map(event => (
          <EventCard event={event} key={event._id}/>
        ))}
      </main>
      </>
  )
}


export default EventList