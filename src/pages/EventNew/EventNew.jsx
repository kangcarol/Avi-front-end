import { useState } from "react";
import styles from './EventNew.module.css'

const EventNew = (props) => {
  const [form, setForm]  = useState({
    title: '',
    text: '',
    category: 'News',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddEvent(form)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
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
          placeholder="Location"
          onChange={handleChange}
        />
        <label htmlFor="owner-input">Owner</label>
        <textarea
          required
          type="text"
          name="owner"
          id="owner-input"
          value={form.owner}
          placeholder="Location"
          onChange={handleChange}
        />
         <label htmlFor="date-input">Date</label>
        <textarea
          required
          type="date"
          name="date"
          id="owner-input"
          value={form.date}
          placeholder="Date"
          onChange={handleChange}
        />
         <label htmlFor="details-input">Details</label>
        <textarea
          required
          type="text"
          name="details"
          id="details-input"
          value={form.details}
          placeholder="Details"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EventNew