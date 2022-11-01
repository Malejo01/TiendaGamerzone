import React from 'react'
import "./styles.css"

function BackgroundVideo() {
    return (
    <video muted autoPlay loop>
        <source src='https://cdn-animation.artstation.com/p/video_sources/000/016/909/rog.mp4' type='video/mp4'></source>
    </video>
    )
}

export default BackgroundVideo
