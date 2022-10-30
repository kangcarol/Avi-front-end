import { Link } from "react-router-dom";
import styles from './QuestionCard.module.css'
//import AuthorInfo from "../AuthorInfo/AuthorInfo"

// Components
//import AuthorInfo from "../AuthorInfo/AuthorInfo"

const QuestionCard = ({ question }) => {
  return (
    <Link to={`/questions/${question._id}`}>
      <article className={styles.question}>
        <p>{question.question}</p>
        <p>{question.text}</p>
      </article>
    </Link>
  )
}

export default QuestionCard