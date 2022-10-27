import { Link } from "react-router-dom";
import styles from './BirdCard.module.css'
import { useLocation } from "react-router-dom";
import BirdIcon from '../../assets/branding/profile.png'

const BirdCard = (props) => {
  const location = useLocation();
  console.log(props, "wishlist")


  return (
    <>
        <article className={styles.container}>
          <header>
            <span>
              {props.bird.photo ?
              <img src={props.bird.photo} className="birdPhoto" alt={props.bird.name} style={{width: '340px'}} />
              :
              <img src={BirdIcon} alt="Default bird" style={{width: "40px"}}/>}

              <Link to={`/birds/${props.bird._id}`}>
                <h1>{props.bird.name.toUpperCase()}</h1>
              </Link>
            </span>
          </header>

        {(location.pathname ==='/birds') || (location.pathname !=='/birds' && props.wishlist ) ?

          <button onClick={() => props.handleSeen(props.bird) }>seen</button>
          :
          ''
        }
        {(location.pathname ==='/birds') || (location.pathname !=='/birds' && props.wishlist===false) ?

        <button onClick={() => props.handleAddWishlist(props.bird)}>+ wishlist</button>
          :
          ''
        }
        </article>
    </>
  )

}

export default BirdCard