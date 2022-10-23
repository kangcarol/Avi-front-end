import styles from "./EventList.module.css"
import EventCard from "../../components/EventCard/EventCard";

const EventList = (props) => {
  console.log("eventlist props:", props);
  return (
    <main className={styles.container}>
      {props.events.map(event => (
        <EventCard event={event} key={event._id}/>
      ))}
    </main>
  )
}

export default EventList