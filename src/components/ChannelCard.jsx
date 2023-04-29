import React from 'react'
import { Box, Typography, CardContent,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {demoProfilePicture} from '../utils/constants'
const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        width: {
          xs: '356px', md:'315px'
        },
        height: '300px',
        margin: 'auto',
        marginTop
        
    }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white'
        }}>
          <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{
              width:"180px",
              height: '180px',
              borderRadius: '50%',
              mb: 2,
              border: '1px solid #e3e3e3'
            }}
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{
              fontSize: '14px',
              color: 'gray',
              ml: '5px'
            }}></CheckCircle>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && 
            (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscriber
            </Typography>
          )
          }
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard