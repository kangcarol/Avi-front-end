import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout, profile }) => {

  const publicLinks = (
    <ul>
      <li><NavLink to="/login">Log In</NavLink></li>
      <li><NavLink to="/signup">Sign Up</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li>Welcome, {user.name}</li> 
      {/* <img src={profile.photo} alt="User's avatar" style={{width: "40px"}}/> */}
      <li><NavLink to="/profiles">Profiles</NavLink></li>
      <li><NavLink to="/birds">Birds</NavLink></li>
      <li><NavLink to="/supplylists">Supply Lists</NavLink></li>
      <li><NavLink to="/events">Events</NavLink></li>
      <li><NavLink to="/questions">Questions</NavLink></li>

      <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
      <li><NavLink to="/changePassword">Change Password</NavLink></li>
    </ul>
  )

  return (
    <nav className={styles.container}>
      {/* <NavNavLink to={'/'}><img src={Logo} alt="Logo" /></NavNavLink> */}
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}


export default NavBar
