import { Link } from "react-router-dom"
import styles from './SupplyCard.module.css'

// Components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

const BlogCard = ({ supplylist }) => {
  return (
    <Link to={`/supplylists/${supplylist._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{supplylist.title}</h1>
          </span>
          {/* <AuthorInfo content={supplylist} /> */}
        </header>
        {/* <p>{supplylist.description}</p>
        <p>{supplylist.items}</p> */}
      </article>
    </Link>
  )
}

export default BlogCard