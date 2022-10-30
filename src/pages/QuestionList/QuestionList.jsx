import styles from "./QuestionList.module.css"
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import { useNavigate } from "react-router-dom";

const QuestionList = (props) => {
  const navigate = useNavigate()
  return (
    <>
      <h1 className={styles.question}>Field Notes</h1>
      <main className={styles.question}>
        <button className="btn btn-secondary" onClick={() => {navigate('/questions/new')}}>Create a New Post</button>
          {props.questions.map(question => (
            <QuestionCard question={question} key={question._id}/>
          ))}
      </main>
    </>
  )
}

export default QuestionList