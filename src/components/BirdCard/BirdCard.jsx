import { Link } from "react-router-dom";
import styles from './BirdCard.module.css'

// Components
// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const BirdCard = (props) => {
  return (
    <>
      <Link to={`/birds/${props.bird._id}`}>
        <article className={styles.container}>
          <header>
            <span>
              <img src={props.bird.image} className="birdPhoto" alt="{bird.name}" />
              <h1>{props.bird.name.toUpperCase()}</h1>
            </span>
            {/* <AuthorInfo content={bird} /> */}
          </header>
          <p>{props.bird.description}</p>
          {/* <button onClick={() => props.handleAddWishlist(props.bird)}>+ wishlist</button> */}

        </article>
      </Link>
    </>
  )
}

//! need onclick for wishlist button
export default BirdCard