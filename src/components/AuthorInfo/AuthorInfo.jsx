import styles from './AuthorInfo.module.css'
// import DateCard from "../DateCard/DateCard"
import ProfileIcon from '../../assets/branding/profile.png'

const AuthorInfo = ({ content }) => {
  //const photo = content.author.photo ? content.author.photo : ProfileIcon
  const photo =  ProfileIcon
  return (
    <div className={styles.container}>

      <section>
        <h4>{content.author.name}</h4>
      </section>
    </div>
  )
}

export default AuthorInfo