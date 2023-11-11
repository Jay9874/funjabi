import { Navbar } from '../components'
import * as React from 'react'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'

export default function Home () {
  return (
    <React.Fragment>
      <Navbar />
      <section className='hero-section'>
        <div className='left-hero'>
          <Typography variant='h2'>
            Desi @Heart, <br />
            Funny in Style.
          </Typography>
          <Typography variant='p' sx={{ fontSize: '1.5rem', textAlign: { xs: 'center', md: 'left' },  }}>
            Your beloved regional clothing all curated from Kashmir to
            Kanyakumari, Punjab to Meghalaya with touch of fun.
          </Typography>
          <Stack spacing={2} direction='row'>
            <Button
              variant='contained'
              sx={{
                backgroundColor: '#000000',
                color: '#ffffff',
                ':hover': { backgroundColor: '#9198e5' }
              }}
            >
              Explore Collection
            </Button>
            <Button
              variant='contained'
              sx={{
                backgroundColor: '#00000080',
                color: '#ffffff',
                ':hover': { backgroundColor: '#9198e5' }
              }}
            >
              Lets fun
            </Button>
          </Stack>
          <Typography variant='p' sx={{ padding: '2rem 0 0' }}>
            Trusted by 1M+ Customers
          </Typography>
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
        <div className='right-hero'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 -10 100 120'
            width='213'
            className='image'
          >
            <title>Funky Outfit</title>
            <desc>Get more the funky outfit.</desc>
            <defs>
              <clipPath id='maskImage' clipPathUnits='userSpaceOnUse'>
                <path d='M100 63A50 50 0 110 70C0 42 20 0 48 0c27 0 52 42 52 70z' />
              </clipPath>
              <clipPath id='maskBackground' clipPathUnits='userSpaceOnUse'>
                <path d='M190 101a50 50 0 01-50 50 50 50 0 01-50-50 50 50 0 0150-50 50 50 0 0150 50z' />
              </clipPath>
            </defs>
            {/* <!-- Background image --> */}
            <g clipPath='url(#maskImage)' transform='translate(0 -7)'>
              {/* <div className='right-hero-img' x='70' y='38' transform='translate(-90 -31)' /> */}
              <image
                clipPath='url(#maskBackground)'
                width='120'
                height='120'
                x='70'
                y='38'
                href='/back.png'
                
              />
              {/* <!-- Foreground image --> */}
              <image
                width='120'
                height='144'
                x='-15'
                y='0'
                className='image__foreground'
                href='https://res.cloudinary.com/dazdt97d3/image/upload/v1615813805/foreground.png'
              />
            </g>
          </svg>
        </div>
      </section>
    </React.Fragment>
  )
}
