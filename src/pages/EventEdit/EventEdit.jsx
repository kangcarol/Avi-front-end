import { useState } from "react"
import { useLocation } from "react-router-dom"
import styles from './EventEdit.module.css'

const EventEdit = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)

  console.log(form)
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateBlog(form)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Edit Event</h1>
        <label htmlFor="title-input">Title</label>
        <input
          required
          type="text"
          name="title"
          id="title-input"
          value={form.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <label htmlFor="location-input">Location</label>
        <textarea
          required
          type="text"
          name="location"
          id="location-input"
          value={form.location}
          placeholder="location"
          onChange={handleChange}
        />
         <label htmlFor="owner-input">Owner</label>
        <textarea
          required
          type="text"
          name="owner"
          id="owner-input"
          value={form.owner}
          placeholder="owner"
          onChange={handleChange}
        />
         <label htmlFor="date-input">Date</label>
        <textarea
          required
          type="text"
          name="date"
          id="date-input"
          value={form.date}
          placeholder="date"
          onChange={handleChange}
        />
         <label htmlFor="details-input">Details</label>
        <textarea
          required
          type="text"
          name="details"
          id="details-input"
          value={form.details}
          placeholder="details"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EventEdit