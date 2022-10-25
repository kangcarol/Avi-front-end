import styles from "./ProfileDetails.module.css"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import BirdCard from "../../components/BirdCard/BirdCard"

// components
import Loading from "../Loading/Loading"
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

// Services
import * as profileService from "../../services/profileService"

const ProfileDetails = (props) => {
  const { id } = useParams()
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await profileService.show(id)
      setProfile(data)
    }
    fetchProfile()
  }, [id])

  if (!profile) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h3>{profile.name.toUpperCase()}</h3>
          <span>
            <p>about:</p>
            <p>{profile.about}</p>
          </span>
          <img src={profile.photo} alt="User's avatar" style={{width: "40px"}}/>
          <span>
            <>
              {/* <Link to={`/profiles/${id}/edit`} state={profile}>edit</Link> */}
            </>
            {/* } */}
          </span>
        </header>

        <div>
        <h1>Seen</h1>
          {props.seen.map(bird => (
            <BirdCard handleSeen={props.handleSeen} bird={bird} key={bird._id}/>
            ))}
        <h1>Wishlist</h1>
          {props.wishlist.map(bird => (
            <BirdCard wishlist={true} handleAddWishlist={props.handleAddWishlist} bird={bird} key={bird._id}/>
          ))}
        </div>

      </article>
    </main>
  )
}

export default ProfileDetails
