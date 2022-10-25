import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// components
import Loading from "../Loading/Loading"
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

import styles from "./ProfileDetails.module.css"

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
          <p>{profile.about}</p>
          <img src={profile.photo} alt="User's avatar" style={{width: "40px"}}/>
          <span>
            <>
              <Link to={`/profiles/${id}/edit`} state={profile}>edit</Link>
            </>
            {/* } */}
          </span>
        </header>
      </article>
    </main>
  )
}

export default ProfileDetails