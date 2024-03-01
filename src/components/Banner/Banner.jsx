import React, { useEffect, useState } from 'react'
import './Banner.css'
import {imageUrl } from '../../constants/Constant'
import axios from '../../Axios'  

function Banner({url}) {
    let randomNumber = Math.floor(Math.random() * 19) + 1;
    const [movie, setMovie] = useState()
    

    useEffect(() => {
      axios.get(url).then((response)=>{
        setMovie(response.data.results[randomNumber])
        console.log(response.data.results[randomNumber])
      })
    }, [])
    
    
  return (
    <div className='banner'
    style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}
    >
        <div className='content'>
            <h1 className='title'>{movie?movie.title||movie.name:""}</h1>
            <div className="buttons">
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie?movie.overview:""}</h1>
        </div>
            <div className="fade"></div>
    </div>
  )
}

export default Banner