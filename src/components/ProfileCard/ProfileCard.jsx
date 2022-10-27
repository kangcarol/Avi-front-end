import { Link } from "react-router-dom";
import styles from './ProfileCard.module.css'
import ProfileIcon from '../../assets/branding/profile.png'

// Components
// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const ProfileCard = ({ profile }) => {
  console.log("PROFILE PHOTO", profile.photo)
  return (
    <>
      <Link to={`/profiles/${profile._id}`}>
        <article className={styles.container}>
          <header>
            <span>
              {profile.photo ?
              <img src={profile.photo} alt="User's avatar" style={{width: "40px"}}/>
              :
              <img src={ProfileIcon} alt="Default avatar" style={{width: "40px"}}/>}
            </span>
          </header>
          <h3>{profile.name.toUpperCase()}</h3>
        </article>
      </Link>
    </>
  )
}

export default ProfileCard