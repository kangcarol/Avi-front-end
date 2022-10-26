import { Link } from "react-router-dom";
import styles from './BirdCard.module.css'
import { useLocation } from "react-router-dom";

// Components
// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const BirdCard = (props) => {
  const location = useLocation();
  console.log(props, "wishlist")


  return (
    <>
        <article className={styles.container}>
          <header>
            <span>
              <img src={props.bird.photo} className="birdPhoto" alt="{bird.name}" style={{width: '340px'}} />
              <Link to={`/birds/${props.bird._id}`}>
                <h1>{props.bird.name.toUpperCase()}</h1>
              </Link>
            </span>
            {/* <AuthorInfo content={bird} /> */}
          </header>
          <p>{props.bird.description}</p> 

        {(location.pathname ==='/birds') || (location.pathname !=='/birds' && props.wishlist ) ?

          <button id="seen-btn" onClick={() => props.handleSeen(props.bird) }>seen</button>
          :
          ''
        }
        {(location.pathname ==='/birds') || (location.pathname !=='/birds' && props.wishlist===false) ?

        <button id="wishlist-btn" onClick={() => props.handleAddWishlist(props.bird)}>+ wishlist</button>
          :
          ''
        }
        </article>
    </>
  )

}

export default BirdCard