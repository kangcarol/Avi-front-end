import { Link } from "react-router-dom";
import styles from './EventCard.module.css'

// Components
// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const EventCard = ({ event }) => {
  console.log(event.owner.name)
  return (
    <Link to={`/events/${event._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{event.title}</h1>
            <p>{event.location}</p>
            <p>{event.owner.name}</p>
        
            <p>{event.date}</p>
            <p>{event.details}</p>
            {/* <Icon category={event.category} /> */}
          </span>
          {/* <AuthorInfo content={event} /> */}
        </header>
        <p>{event.text}</p>
      </article>
    </Link>

    
  )
}

export default EventCard