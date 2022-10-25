import styles from "./QuestionList.module.css"
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import { useNavigate } from "react-router-dom";

const QuestionList = (props) => {
  console.log("questionlist props:", props)
  return (
    <main className={styles.container}>
      {props.questions.map(question => (
        <QuestionCard question={question} key={question._id}/>
      ))}
      <div>
        <button>Create a New Post</button>
      </div>
    </main>
  )
}

export default QuestionList