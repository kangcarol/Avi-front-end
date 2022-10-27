const AnswerCard = ({ answer }) => {
  return (
    <article>
      <header>
        {/* <AuthorInfo content={answer} /> */}
      </header>
      <p>{answer.text}</p>
    </article>
  )
}

export default AnswerCard