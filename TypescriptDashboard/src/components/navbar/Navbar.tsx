import React from 'react'
import styles from "./index.module.css"
import { Link , useNavigate } from 'react-router-dom'
import SignUp from '../SignUp'
const Navbar = () => {

  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    console.warn("apple");
    localStorage.clear();
    navigate('/');
}
  return (
    <div className={styles.nav_container}>
       <nav className='header'>
        <Link to='/'>Home</Link>
        {/* <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign Up</Link> */}
        { auth ? <Link to="/logout" onClick={logout}> Logout</Link> :
        <><Link to="/signup">Sign Up</Link>  <Link to='/login'>Login</Link></>} 
        {/* <h1 style={bg}> TypeScript Todo Application</h1>
        <Typography variant="h3"> Typescript Todo Application    </Typography> */}
      </nav>
    </div>
  )
}

export default Navbar