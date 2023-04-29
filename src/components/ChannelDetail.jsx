import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Video, ChannelCard } from './index'
import { fetchFromAPI } from '../utils/fetchFromApi'

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        setChannelDetail(data?.items[0]);

      })
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        setVideos(data?.items);

      })
  }, [id])
  console.log(channelDetail);
  return (
    <>
      <Box minHeight='70vh'>
        <Box style={{
          background: 'linear-gradient(90deg, rgba(0,238,247, 1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '300px',
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
      <Box sx={{
        display: 'flex',
        p: '2'
      }}>
        <Box
          sx={{
          mr :{sm: '100px'}
        }}
        />
          <Video videos={videos}/>
      </Box>
    </>
  )
}

export default ChannelDetail