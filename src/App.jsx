
import './App.css'
import { action,originals,trending,HorrorMovies,RomanceMovies } from './Urls'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Signup from './components/SignUp/Signup'
import { firebaseApp,auth,firestore,collection,addDoc} from './components/firebase/Config'
import { firebaseContext,AuthContext } from './components/store/Context'
import Home from './components/Pages/Home'
import Login from './components/Login/Login'
import { useContext, useEffect, useState } from 'react'
function App() {
  const [user,setUser] = useState('')


  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUser(user)
      console.log("checker",user)
    })
  })


  return (
    <>
    <firebaseContext.Provider value={{auth,firestore,collection,addDoc}}>
    <AuthContext.Provider value={{user}}>
    <Router>
      <Routes>
        
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />} />
      </Routes>
      </Router>
      </AuthContext.Provider>
      </firebaseContext.Provider>
      </>
      
      
  )
}

export default App
