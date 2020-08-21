import React from 'react'
import VideoItem from './VideoItem'
import {Grid} from '@material-ui/core'

const VideoList=(props)=>{
  const listOfVideos=props.videos.map((video)=>  <VideoItem/>)
  return listOfVideos
}

export default VideoList