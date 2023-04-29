import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {demoThumbnailUrl, demoVideoUrl,demoVideoTitle, demoChannelUrl,demoChannelTitle} from '../utils/constants'
const VideoCard = ({video :{id:{videoId},snippet}}) => {
  return (
    <Card sx={{width:{xs: '100%',sm: '358px',md: '310px'},borderRadius:'10px',border:'1px solid black'}} >
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{
            height: '180px',
            width: {
              xs: '100%', sm: '358px', md: '320px'
            }
          }}

        />
      </Link>
      <CardContent sx={{
        background: '#1e1e1e',
        height: '80px'
      }}> <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' color='#FFF' fontWeight='bold'>
            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle1' color='gray' fontWeight='bold'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{
              fontSize: 12,
              color: 'gray',
              ml: '5px'
            }}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
    
  )
}

export default VideoCard