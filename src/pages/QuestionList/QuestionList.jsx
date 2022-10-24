import styles from "./QuestionList.module.css"
import QuestionCard from "../../components/QuestionCard/QuestionCard";

const QuestionList = (props) => {
  console.log("questionlist props:", props)
  return (
    <main className={styles.container}>
      {props.questions.map(question => (
        <QuestionCard question={question} key={question._id}/>
      ))}
    </main>
  )
}

export default QuestionList