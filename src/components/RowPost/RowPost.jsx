import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../Axios'
import {imageUrl,apiKey } from '../../constants/Constant'
import YouTube from 'react-youtube';
function RowPost({url,title}) {
  const [posts, setPost] = useState([])
  const [urlId,setUrlId]=useState()
  useEffect(() => {
    axios.get(url).then((response)=>{
      console.log(response.data)
    setPost(response.data.results)
  })
  }, [])
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleVideo = (id)=>{
    console.log("id",id)
    axios.get(`/movie/${id}/videos?api_key=${apiKey}`).then((response)=>{
      console.log("response",response)
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
    })
  }
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='posters'>
          {posts.map((post)=>
          <div className="poster-wrapper" onClick={()=>handleVideo(post.id)}>
            <div className="overlay"></div>
            <img className='poster' src={`${imageUrl+post.backdrop_path}`} alt="" />
            <div className="poster-title">{post.title?post.title:post.name}</div>
          </div>
          )}
        
       
        </div>
        {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost