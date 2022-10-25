import { Link } from "react-router-dom";
import styles from './BirdCard.module.css'

// Components
// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const BirdCard = ({ bird }) => {
  return (
    <>
      <Link to={`/birds/${bird._id}`}>
        <article className={styles.container}>
          <header>
            <span>
              <img src={bird.image} className="birdPhoto" alt="{bird.name}" />
              <h1>{bird.name.toUpperCase()}</h1>
              {/* <Icon category={bird.category} /> */}
            </span>
            {/* <AuthorInfo content={bird} /> */}
          </header>
          <p>{bird.description}</p>

        </article>
      </Link>
    </>
  )
}

//! need onclick for wishlist button
export default BirdCard