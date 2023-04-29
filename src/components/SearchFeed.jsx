import {useState,useEffect} from 'react'
import{Box,Typography} from '@mui/material'
import { Video } from './index'
import { fetchFromAPI } from '../utils/fetchFromApi'
import { useParams } from 'react-router-dom'
const SearchFeed = () => {
  //!================== UseState============================
  const [videos, setVideos] = useState([]);
  //!================== UseEffect============================
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items)
      }  
    )
  }, [searchTerm])
  
  return (
    <Box pl={2} pt={1} sx={{
      overflowY: 'auto',
      height: '90vh',
      flex: '2'
    }}>
      <Typography variant='h5' fontWeight='bold' mb={2} sx={{
        color: '#fff',
      }}>Search Result For:
        <span style={{ color: '#F31503' }}> {searchTerm }</span> videos
      </Typography>
      <Video videos={videos} />
    </Box>
  )
}

export default SearchFeed
