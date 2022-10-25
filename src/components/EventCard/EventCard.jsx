import { Link } from "react-router-dom";
import styles from './EventCard.module.css';
import moment from 'moment/moment'

// Components
// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const EventCard = ({ event }) => {
  console.log(event.owner.name)
  const d = event.date
  const formattedDate= moment(d).format('L')

  return (
    <Link to={`/events/${event._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{event.title}</h1>
            <p>{event.location}</p>
            <p>{event.owner.name}</p>
            <p>{formattedDate}</p>
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