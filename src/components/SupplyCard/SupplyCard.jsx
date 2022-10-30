import { Link } from "react-router-dom"
import styles from './SupplyCard.module.css'


const SupplyListCard = ({ supplylist }) => {
  return (
    <article className={styles.supplyCard}>
      <Link to={`/supplylists/${supplylist._id}`}>
        <h1>{supplylist.title}</h1>
      </Link>
      </article>
  )
}

export default SupplyListCard