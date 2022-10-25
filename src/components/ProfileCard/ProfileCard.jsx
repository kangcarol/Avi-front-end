import { Link } from "react-router-dom";
import styles from './ProfileCard.module.css'

// Components
// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const ProfileCard = ({ profile }) => {
  return (
    <>
      <Link to={`/profiles/${profile._id}`}>
        <article className={styles.container}>
          <header>
            <span>
            <img src={profile.photo} alt="User's avatar" style={{width: "40px"}}/>
            </span>
          </header>
          <h3>{profile.name.toUpperCase()}</h3>
          <p>{profile.about}</p>
        </article>
      </Link>
    </>
  )
}

//! need onclick for wishlist button
export default ProfileCard