import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// components
import Loading from "../Loading/Loading"
//import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

import styles from "./QuestionDetails.module.css"

// Services
import * as questionService from "../../services/questionService"

const QuestionDetails = (props) => {
  const { id } = useParams()
  const [question, setQuestion] = useState(null)

  useEffect(() => {
    const fetchQuestion = async () => {
      const data = await questionService.show(id)
      setQuestion(data)
    }
    fetchQuestion()
  }, [id])

  console.log("Styles:", styles);

  if (!question) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h1>DETAILS</h1>
          <h3>{question.question}</h3>
          <span>

            {question.author._id === props.user.profile &&
              <>
                <Link to={`/questions/${id}/edit`} state={question}>Edit</Link>
                <button>Delete</button>
              </>
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