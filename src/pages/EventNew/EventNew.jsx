import { useState } from "react";
import styles from './EventNew.module.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventNew = (props) => {
  const [form, setForm]  = useState({
    title: '',
    location: '',
    owner: '',
    date: Date,
    time: 'time',
    details: '',
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
      <form className={styles.inputForm} 
        onSubmit={handleSubmit}>
        <label htmlFor="title-input">Title</label>
        <input
          required
          type="text"
          name="title"
          className={styles.titleInput}
          value={form.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <label htmlFor="location-input">Location</label>
				<input
          required
          type="text"
          name="location"
          className={styles.locationInput}
          value={form.location}
          placeholder="Location"
          onChange={handleChange}
        />
         <label htmlFor="date-input">Date</label>
        <input
          required
          type="datetime-local"
          name="date"
          className={styles.dateInput}
          value={form.date}
          placeholder="Date"
          onChange={handleChange}
        />
        <label htmlFor="time-input">Time</label>
         <label htmlFor="details-input">Details</label>
        <input
          required
          type='text'
          name="details"
          className={styles.inputDetails}
          value={form.details}
          onChange={handleChange}
          placeholder="Details"
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EventNew