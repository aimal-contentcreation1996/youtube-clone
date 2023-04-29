import {useState,useEffect} from 'react'
import{Box,Typography,Stack} from '@mui/material'
import { SideBar, Video } from './index'
import { fetchFromAPI } from '../utils/fetchFromApi'
const Feed = () => {
  //!================== UseState============================
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  //!================== UseEffect============================
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items)
      }  
    )
  }, [selectedCategory])
  
  return (
    <Stack
      sx={{
        flexDirection: {
          xs: 'column',
          md: 'row'
      }
    }}
    >
      <Box sx={{
        height: {
          xs: 'auto',
          md:'92vh'
        },
        borderRight: '1px solid #3d3d3d',
        px:{xs: 0, md: 2}
      }}>
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className='copyright' variant='body2' sx={{
          color: '#fff',
          mt:'1.5'
        }}>
          Copyright 2023 JSM Media
        </Typography>
      </Box>
      
      <Box pl={2} pt={1} sx={{
        overflowY: 'auto',
        height: '90vh',
        flex: '2'
      }}>
        <Typography variant='h5' fontWeight='bold' mb={2} sx={{
          color: '#fff',
        }}>{selectedCategory} 
            <span style={{color:'#F31503'}}> Videos</span>
        </Typography>
        <Video videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
