import { useState } from "react";
import styles from './BirdNew.module.css'

const BirdNew = (props) => {
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
    props.handleAddBird(form)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
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
        <label htmlFor="category-input">Photo</label>
        {/* <textarea
          required
          name="image"
          id="image-bird"
          value={form.image}
          onChange={handleChange}
        />    
        <button type="submit">add photo</button> */}

        <button type="submit">save</button>
      </form>
    </main>
  )
}

//! CHANGE OUT IMAGE CODE -- AFTER LECTURE ON HOW TO 

export default BirdNew