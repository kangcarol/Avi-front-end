import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styles from './QuestionDetails.module.css'
import * as questionService from '../../services/questionService'
import NewAnswer from "../../components/AnswerNew/AnswerNew"
import Loading from "../Loading/Loading"

const QuestionDetails = (props) => {
  const { id } = useParams()
  const [question, setQuestion] = useState(null)
  const [answer, setAnswer] =useState(null)

const handleAddAnswer = async (answerData) => {
  const newAnswer = await questionService.createAnswer(id, answerData)
  setAnswer({ ...answer, comments: [...answer.comments, newAnswer] })
  }

  useEffect(() => {
    const fetchQuestion = async () => {
      const data = await questionService.show(id)
      setQuestion(data)
    }
    fetchQuestion()
  }, [id])

if (!question) return <Loading />

  return (
    <main className={styles.container}>
      <article>
          {console.log('author here', question.author._id)}
        <header>
          <h1>DETAILS</h1>
          <h3>{question.question}</h3>
          <span>
          {/* <AuthorInfo content={question} /> */}
            {question.author._id === props.user.profile && 
          <>
                <Link to={`/questions/${id}/edit`} state={question}>Edit</Link>

                <button onClick={() => props.handleDeleteQuestion(id)}>Delete</button>
              </> 
            }
          </span>
        </header>
        <p>{question.text}</p>
      </article>
      <section>
  <h1>Comments</h1>
  <NewAnswer handleAddAnswer={handleAddAnswer} />
</section>
    </main>
  )
}

export default QuestionDetails