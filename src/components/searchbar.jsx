import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import API from '../services/API';
import VideoList from './videoList';
import VideoDetail from './videoDetail';

const Searchbar = () => {
  const [ term, setTerm ] = useState('');
  const [ videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState('');

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const response = await API.get('/search', {
      params: {
        q:term
      }
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0])
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video)
  }

 return (
   <Box >
    <Box
      component="form"
      sx={{ display: 'flex', justifyContent:'center', 
        '& > :not(style)': { m: 1, width: '25%' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={onFormSubmit}
    >
      <TextField 
      id="standard-basic" 
      label="Searchbar" 
      variant="standard"
      value={term}
      onChange={e => {setTerm(e.target.value)}} />
    </Box>
    <Box  sx={{ display: 'flex', justifyContent:'center',
        '& > :not(style)': { m: 6, width: '80%' },
      }}>
        <Box sx={{display: 'flex', justifyContent:'space-around'}}>
        <VideoDetail video={selectedVideo}/>
          <VideoList 
          onVideoSelect={onVideoSelect}
          videos={videos}/>
          </Box>
    </Box>

    </Box>
  );
}

export default Searchbar