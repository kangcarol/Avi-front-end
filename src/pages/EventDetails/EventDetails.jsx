import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// components
import Loading from "../Loading/Loading"
// import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

import styles from "./EventDetails.module.css"

// Services
import * as eventService from "../../services/eventService"

const EventDetails = (props) => {
  const { id } = useParams()
  const [event, setEvent] = useState(null)

  useEffect(() => {
    const fetchEvent = async () => {
      const data = await eventService.show(id)
      setEvent(data)
    }
    fetchEvent()
  }, [id])

  console.log("Styles:", styles);

  if (!event) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h3>{event.category.toUpperCase()}</h3>
          <h1>{event.title}</h1>
          <span>
            {/* <AuthorInfo content={event} />

            {event.author._id === props.user.profile && */}
              <>
                <Link to={`/events/${id}/edit`} state={event}>Edit</Link>
                <button
                  onClick={() => props.handleDeleteEvent(id)}
                >
                  Delete
                </button>
              </>
            {/* } */}
          </span>
        </header>
        <p>{event.text}</p>
      </article>
      <section>
        <h1>Comments</h1>
      </section>
    </main>
  )
}

export default EventDetails