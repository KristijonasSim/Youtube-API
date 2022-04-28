/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const VideoDetail = ({video}) => {
  if(!video){
    return <Box>Loading...</Box>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(videoSrc)
  return (
    <Box>
      <Box >
        <iframe src={videoSrc} style={{minWidth: '500px', minHeight: '450px'}} />
      </Box>
      <Box sx={{border: '1px solid black', width: '75%', p:2, mb: 2}}>
      <Typography variant="h6">{video.snippet.title}</Typography>
      <Typography variant="p">{video.snippet.description}</Typography>
      </Box>
    </Box>
  )
}

export default VideoDetail
