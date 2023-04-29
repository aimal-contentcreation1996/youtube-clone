import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const SideBar = ({ selectedCategory, setSelectedCategory, }) => {
  return (
    <Stack
      direction='row'
      sx={{
        overflowY: 'auto',
        height: { xs: 'auto', md: '95%' },
        flexDirection: { md: 'column' }
      }}
    >
      {categories.map((category) => (
        <button className='category-btn' style={{
          background: category.name === selectedCategory && '#FC1503',
          color: '#fff'
        }}
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
        >
          <span style={{
            color: category.name === selectedCategory ? 'white' : 'red', marginRight:'15px'
          }}>{category.icon}</span>
          <span style={{
            opacity: category.name === selectedCategory ? '1' : '0.6',
            whiteSpace: 'nowrap',
          }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default SideBar