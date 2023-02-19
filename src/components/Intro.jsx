import React from 'react'
import FullScreen from './UI/FullScreen/FullScreen'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { HomeButton } from './UI/HomeButton'
import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <FullScreen>
    <Box 
      sx ={{maxWidth:'400px',
            margin: '0 auto', 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100vh',
            gap: '40px',
            padding: '0 15px',
      }}>
      <Typography
        textAlign="center"
        color = 'white'
        variant="h4" 
        component="h1"
      >Test assignment for front-end developer</Typography>
      <Typography
        textAlign="center"
        color = 'white'
        variant="p" 
      >What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</Typography>
    <Link to = 'user' smooth = {true}>
      <HomeButton
        onClick = {()=>null}
        >Users
      </HomeButton>
    </Link>
    </Box>
  </FullScreen>


  )
}

export default Intro