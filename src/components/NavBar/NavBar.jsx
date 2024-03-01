import React, { useContext } from 'react'
import './NavBar.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AuthContext, firebaseContext } from '../store/Context';
import { useNavigate } from 'react-router';

function NavBar() {
  const {user} = useContext(AuthContext)
  const {auth} = useContext(firebaseContext)
  const navigate = useNavigate()
  const handleLogOut = ()=>{
    try {
      auth.signOut()
      navigate('/login')
    } catch (error) {
      alert(error)
    }
  }
  return (
    
    <div className='nav'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
      <div className="lists">
      <p className='list'>Home</p>
      <p className='list'>Tv Shows</p>
      <p className='list'>Movies</p>
      </div>
      <div className="right-lists">
      <i className='right-list' class="right-list bi bi-search"></i>
      <p className='right-list'>Kids</p>
      <p className='right-list'>DVD</p>
      <i className='right-list' class=" right-list bi bi-bell-fill"></i>
      {user && user?<p className='right-list' onClick={handleLogOut} style={{cursor:"pointer"}}>Logout</p>:""}
      
      {user && user?<img className='avatar' src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="" />:
      <p onClick={()=>navigate('/login')} style={{cursor:"pointer"}}>Login</p>
    }
      </div>
      
      
      
    </div>
    
  )
}

export default NavBar