import styles from './AuthorInfo.module.css'
// import DateCard from "../DateCard/DateCard"
import ProfileIcon from '../../assets/branding/profile.png'

const AuthorInfo = ({ content }) => {
  const photo =  ProfileIcon
  return (
    <div className={styles.container}>
      <img src={photo} alt="User's avatar" />
      <section>
        <h4>{content.author.name}</h4>
      </section>
    </div>
  )
}

export default AuthorInfo