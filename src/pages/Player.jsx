import React, { useEffect } from 'react'
import Header from '../components/Header'

const Player = () => {
    useEffect(() => {
        const queryParameters = new URLSearchParams(window.location.search)
        const id = queryParameters.get("id")
        console.log(id);
    }, [])
    
  return (
    <div>
        <Header/>
        <iframe width="1024" height="720" src="https://player.vimeo.com/video/396522575?h=df64fc18c4" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
    </div>
  )
}

export default Player