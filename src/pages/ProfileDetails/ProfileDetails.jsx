import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// components
import Loading from "../Loading/Loading"
//import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

import styles from "./ProfileDetails.module.css"

// Services
import * as profileService from "../../services/profileService"
import { setToken } from "../../services/tokenService"

const Profile = (props) => {
  const { id } = useParams()

  const [profile, setProfile] = useState([])

useEffect(() => {
    const fetchProfile = async () => {
      const data = await profileService.show(id)
      setProfile(data)
    }
    fetchProfile()
  }, [id])
  // if want error message that resource is not available can write code here


  if (!Profile) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header>
          {/* <h3>{bird.name.toUpperCase()}</h3> */}
          <h1>hello world</h1>
          <span>
            {/* <AuthorInfo content={bird} />
            {bird.author._id === props.user.profile &&
              <>
                <Link to={`/birds/${id}/edit`} state={bird}>edit</Link>
                <button onClick={() => props.handleDeleteBird(id)}>delete</button>
              </>
            } */}
          </span>
        </header>
        <p>{Profile.about}</p>
      </article>
  </main>
  )
}

export default Profile