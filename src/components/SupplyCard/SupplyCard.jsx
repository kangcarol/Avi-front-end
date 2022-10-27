import { Link } from "react-router-dom"
import styles from './SupplyCard.module.css'

// Components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

const SupplyListCard = ({ supplylist }) => {
  return (
    <Link to={`/supplylists/${supplylist._id}`}>
      <article className={styles.supplylist}>
        <header>
          <span>
            <h1>{supplylist.title}</h1>
          </span>
          {/* <AuthorInfo content={supplylist} /> */}
        </header>
      </article>
    </Link>
  )
}

export default SupplyListCard