import React, { useContext, useState } from 'react'
import './Signup.css'
import { firebaseContext } from '../store/Context'
import { useNavigate } from 'react-router'
function Signup() {
    let [name,setName] = useState('')
    let [email,setEmail] = useState('')
    let[password,setPassword] = useState('')
    let [errorMessage,setErrorMessage] = useState('')
    const {auth,collection,addDoc,firestore} = useContext(firebaseContext)
    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            setErrorMessage('')
            if(name.trim()==='' || email.trim()==='' || password.trim()===''){
                return setErrorMessage('Please fill all the fields')     
            }
          const result = await auth.createUserWithEmailAndPassword(email, password);
          const userCredential = result.user;
          await userCredential.updateProfile({
            displayName: name
          });
          await addDoc(collection(firestore, "users"), {
            name: name,
            email: email
          });
          navigate('/')
        } catch (error) {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    setErrorMessage('The email address is already in use');
                    break;
                case 'auth/invalid-email':
                    setErrorMessage('The email address is invalid.');
                    break;
                case 'auth/weak-password':
                    setErrorMessage('The password is too weak. Please choose a stronger password.');
                    break;
                default:
                    setErrorMessage('An error occurred while signing up. Please try again later.');
                    console.error("Error during sign up:", error);
            }        
        }
      }
      
  return (
    <>
    <div className="signup">
        <div className="signup-fade"></div>
    <div className="signup-logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
        </div>
    <div className="signup-card">
        <div className="card">
            <div className="signup-content">
                <p className='signin'>Sign In</p>
                {errorMessage && <p style={{color:"Red", marginBottom:"10px"}}>{errorMessage}</p>}
                <input placeholder='Name' onChange={(e)=>setName(e.target.value)} type="text" />
                <input placeholder='Email' onChange={(e)=>setEmail(e.target.value)} type="text" />
                <input placeholder='Password' onChange={(e)=>setPassword(e.target.value)} type="password" />
                <button className='signup-btn' onClick={handleSubmit}>Sign In</button>
                <p className='login' onClick={()=>navigate('/login')}>Login</p>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Signup