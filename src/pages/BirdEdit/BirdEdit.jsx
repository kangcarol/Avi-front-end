import { useState } from "react"
import { useLocation } from "react-router-dom"
import styles from './BirdEdit.module.css'

const BirdEdit = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)

  console.log(state)
  
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateBird(form)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Edit Bird</h1>
        <label htmlFor="title-input">Bird Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={form.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <label htmlFor="text-input">Description</label>
				<textarea
          required
          type="text"
          name="description"
          id="description-input"
          value={form.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <label htmlFor="category-input">Category</label>
        {/* <textarea
          required
          name="image"
          id="image-bird"
          value={form.image}
          onChange={handleChange}
        />    
        <button type="submit">save photo</button> */}
        <button type="submit">save</button>
      </form>
    </main>
  )
}

//! CHANGE OUT IMAGE CODE -- AFTER LECTURE ON HOW TO 

export default BirdEdit