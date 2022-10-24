import styles from './AuthorInfo.module.css'
// import DateCard from "../DateCard/DateCard"
import ProfileIcon from '../../assets/branding/AVI-profile-icon.png'

const AuthorInfo = ({ content }) => {
  //const photo = content.author.photo ? content.author.photo : ProfileIcon
  return (
    <div className={styles.container}>

      <section>
        <h4>{content.author.name}</h4>
        {/* <DateCard createdAt={content.createdAt} /> */}
      </section>
    </div>
  )
}

export default AuthorInfo