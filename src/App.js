import React,{useState,useEffect} from "react";
import {Grid} from '@material-ui/core'
import "./style.css";
import youtube from './api/youtube'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'

import VideoDetail from './components/VideoDetail'


 function App() {
   const [videos,setVideos]=useState([])

   const [selectedVideo,setSelectedVideo]=useState(null)
   
   useEffect(()=>{
      handleSubmit('React tutorial')
   },[])

   const handleSubmit=async(search)=>{
     const res=await youtube.get('search',{
       params:{
         part:'snippet',
         maxResults:10,
         key:'AIzaSyCT4txxBXNRXyyhx4ANWHJH0gqVT7Mw-qg',
         q:search
       }
     })
     console.log(res.data.items[0])
     setVideos(res.data.items)
     setSelectedVideo(res.data.items[0])
   }
   const onVideoSelect=(video)=>{
     setSelectedVideo(video)
   }

  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
           <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit}/>
           </Grid>
           <Grid item xs={8}>
            <VideoDetail selectedVideo={selectedVideo}/>
           </Grid>
           <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
           </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default App