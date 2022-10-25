import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import styles from "./Profiles.module.css"

const Profiles = () => {
  const [profiles, setProfiles] = useState([])


  // const handleUpdateProfile = async (profileData) => {
  //   const updatedProfile = await profileService.update(profileData)
  //   const updatedProfilesData = profiles.map(profile => {
  //     return profileData._id === profile._id ? updatedProfile : profile
  //   })
  //   setProfiles(updatedProfilesData)
  //   navigate('/profiles')
  // }

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      <h1>Hello. This is a list of all the Birders.</h1>
      {profiles.length ? 
        <>
          <main className={styles.container}>
            {profiles.map(profile => (
              <ProfileCard profile={profile} key={profile._id}/>
            ))}
          </main>
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles


// {profiles.map((profile, index) =>
//   <div >
//     <img src={profile.photo} alt="User's avatar" style={{width: "40px"}}/>
//     <Link to={`/profiles/${profile._id}`}>
//       <h3 key={profile._id}>{profile.name.toUpperCase()}</h3>
//     </Link>
//   </div>
//   )}
// </>