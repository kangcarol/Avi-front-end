import styles from './AnswerCard.module.css'

const AnswerCard = ({ answer }) => {
  return (
    <article className={styles.container}>
      <header key ={answer.id}>
      </header>
      {console.log(answer.author.name)}
      <div>{answer.text}</div>
    </article>
  )
}

export default AnswerCard