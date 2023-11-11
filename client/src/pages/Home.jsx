import { Navbar } from '../components'
import * as React from 'react'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export default function Home () {
  return (
    <React.Fragment>
      <Navbar />
      {/* <CssBaseline />
      <Container maxWidth='sm'>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container> */}
      <section className='hero-section'>
        <div className='left-hero'>
          <Typography variant='h2'>
            Desi @Heart, <br />
            Funny in Style.
          </Typography>
          <Typography variant='p' sx={{ fontSize: '1.5rem' }}>
            Your beloved regional clothing all curated from Kashmir to
            Kanyakumari,
            Punjab to Meghalaya with touch of fun.
          </Typography>
          <Stack spacing={2} direction='row'>
            <Button variant='contained'>Explore Collection</Button>
            <Button variant='contained'>Lets fun</Button>
          </Stack>
          <Typography variant='p'>Trusted by 1M+ Customers</Typography>
          <Stack spacing={2} direction='row'>
            <Rating
              name='text-feedback'
              value={4.2}
              readOnly
              precision={0.1}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
              }
            />
            <Typography variant='p'>4.2/5 (45k Reviews)</Typography>
          </Stack>
        </div>
        <div className='right-hero'></div>
      </section>
    </React.Fragment>
  )
}
