import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout}) => {

  const publicLinks = (
    <ul>
      <li><NavLink to="/login">Log In</NavLink></li>
      <li><NavLink to="/signup">Sign Up</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    console.log(user),
    <ul>
      <h2>Welcome, {user ? user.name : 'Birder'}</h2>
      <li><NavLink to="/profiles">Profiles</NavLink></li>
      <li><NavLink to="/birds">Birds</NavLink></li>
      <li><NavLink to="/supplylists">Supply Lists</NavLink></li>
      <li><NavLink to="/events">Events</NavLink></li>
      <li><NavLink to="/questions">Questions</NavLink></li>
      <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
      {/* <li><NavLink to="/changePassword">Change Password</NavLink></li> */}
      {/* {user ? 
        <img src={user.profile.photo} alt="User's avatar" style={{width: "40px"}}/>
        :
        ''
      } */}
    </ul>
  )

  return (
    <nav className={styles.container}>
      {/* <NavNavLink to={'/'}><img src={Logo} alt="Logo" /></NavNavLink> */}
      {user?  protectedLinks : publicLinks}
    </nav>
  )
}


export default NavBar
