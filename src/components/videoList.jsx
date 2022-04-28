import React from 'react';
import VideoItem from './videoItem';
import Box from '@mui/material/Box';

const VideoList = ({ videos, onVideoSelect }) => {

  const renderedList = videos.map(video => {
    return <VideoItem video={video} onVideoSelect={onVideoSelect} key={video.id.videoId} />;
  });
  

  return (
  <Box>
    {renderedList}
    </Box>
  );
};
export default VideoList;
