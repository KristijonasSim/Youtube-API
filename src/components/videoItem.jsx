import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const VideoItem = ({video, onVideoSelect }) => {
  return (
      <Box onClick={() => onVideoSelect(video)}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, cursor: 'pointer' }}>
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
          <Typography variant='subtitle1' sx={{ ml: 2 }}>{video.snippet.title}</Typography>
      </Box>
         <Box>
           <Divider variant='fullWidth' sx={{ mt: 5, mb: 5, color: 'red' }} />
        </Box>
      </Box>
  ) 
}

export default VideoItem