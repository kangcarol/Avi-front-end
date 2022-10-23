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
          <h3>{blog.category.toUpperCase()}</h3>
          <h1>{blog.title}</h1>
          <span>
            <AuthorInfo content={blog} />
            {blog.author._id === props.user.profile &&
              <>
                <Link to={`/blogs/${id}/edit`} state={blog}>Edit</Link>
                <button onClick={() => props.handleDeleteBlog(id)}>Delete</button>
              </>
            }
          </span>
        </header>
        <p>{blog.text}</p>
      </article>
      <section>
        <h1>Comments</h1>
      </section>
    </main>
  )
}

export default BlogDetails