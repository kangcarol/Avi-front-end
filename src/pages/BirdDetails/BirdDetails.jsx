import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// components
import Loading from "../Loading/Loading"
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

import styles from "./BirdDetails.module.css"

// Services
import * as birdService from "../../services/birdService"

const BirdDetails = (props) => {
  const { id } = useParams()
  const [bird, setBird] = useState(null)

  useEffect(() => {
    const fetchBird = async () => {
      const data = await birdService.show(id)
      setBird(data)
    }
    fetchBird()
  }, [id])
  // if want error message that resource is not available can write code here


  if (!bird) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h3>{bird.name.toUpperCase()}</h3>
          <p>{bird.description}</p>
          <span>
            {/* <AuthorInfo content={bird} /> */}
            {bird.author._id === props.user.profile &&
              <>
                <Link to={`/birds/${id}/edit`} state={bird}>edit</Link>
                <button onClick={() => props.handleDeleteBird(id)}>delete</button>
              </>
            }
          </span>
        </header>
      </article>
    </main>
  )
}

export default BirdDetails