import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styles from './QuestionDetails.module.css'
import * as questionService from '../../services/questionService'

import Loading from "../Loading/Loading"
//import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

const QuestionDetails = (props) => {
  const { id } = useParams()
  const [question, setQuestion] = useState([])

  useEffect(() => {
    const fetchQuestion = async () => {
      const data = await questionService.show(id)
      setQuestion(data)
    }
    fetchQuestion()
  }, [id])

// if (!question) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h1>DETAILS</h1>
          <h3>{question.question}</h3>
          <span>
            {question.author._id === props.user.profile? 
              <>
                <Link to={`/questions/${id}/edit`} state={question}>Edit</Link>
                <button onClick={() => props.handleDeleteQuestion(id)}>Delete</button>
              </> : null
            }
            {console.log("AUTHOR", question.author)}
          </span>
        </header>
        <p>{question.text}</p>
      </article>
      <section>
        <h1>Comments</h1>
      </section>
    </main>
  )
}

export default QuestionDetails