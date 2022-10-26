import { useState } from "react"
import styles from './AnswerNew.module.css'


const NewAnswer = (props) => {
  const [form, setForm] = useState({ text: '' })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddComment(form)
    setForm({ text: '' })
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <textarea
        required
        type="text"
        name="text"
        id="text-input"
        value={form.answer}
        placeholder="share your response"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default NewAnswer