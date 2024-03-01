import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { firebaseContext } from '../store/Context'

function Login() {
    let [email , setEmail] = useState('')
    let [password,setPassword] = useState('')
    let [errorMessage,setErrorMessage] = useState('')
    const navigate = useNavigate()
    const {auth} = useContext(firebaseContext)
    const handleSubmit = async()=>{
        setErrorMessage('')
        if(email.trim()==="" || password.trim()===""){
            return setErrorMessage("Please fill all the fields")
        }
        try {
            await auth.signInWithEmailAndPassword(email,password)
            navigate('/')
        } catch (error) {
            switch (error.code) {
                case 'auth/invalid-credential':
                    setErrorMessage('Invalid email or password')
                    break;
            
                    default:
                        setErrorMessage('An error occurred. Please try again later.');
                        console.error(error);
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
                <p className='signin'>Login</p>
                {errorMessage && <p style={{color:"Red", marginBottom:"10px"}}>{errorMessage}</p>}
                <input placeholder='Email' onChange={(e)=>setEmail(e.target.value)} type="text" />
                <input placeholder='Password' onChange={(e)=>setPassword(e.target.value)} type="password" />
                <button className='signup-btn' onClick={handleSubmit}>Log In</button>
                <p className='login' onClick={()=>navigate('/signup')}>Register</p>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Login