import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useAuthStore } from '../store/useAuthStore'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const defaultTheme = createTheme()

export default function Auth () {
  const { authType } = useAuthStore()

  return (
    <div className='auth-container'>
      {authType === 'sign-in' ? (
        <SignIn />
      ) : (
        authType === 'sign-up' && <SignUp />
      )}
    </div>
  )
}

function SignIn () {
  const navigate = useNavigate()
  const { verifyLoading, setAuthType, performSignIn } = useAuthStore()

  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (!data.get('email')) return toast.error('Enter email to proceed!')
    if (!data.get('password')) return toast.error('Enter password to proceed!')

    performSignIn(data.get('email'), data.get('password'), navigate)
  }

  return (
    // <ThemeProvider theme={defaultTheme}>
    <Container component='main' maxWidth='xs'>
      {/* <CssBaseline /> */}
      <Box
        sx={{
          // marginTop: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar
          onClick={() => navigate('/')}
          alt='company_logo'
          src='/logo.png'
          sx={{ mr: 1, cursor: 'pointer' }}
        />
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='new-password'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            {verifyLoading ? 'Verifying' : 'Sign In'}
          </Button>
          <Grid container>
            <Grid item>
              <Link
                href='#'
                onClick={() => setAuthType('sign-up')}
                variant='body2'
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
    // </ThemeProvider>
  )
}

function SignUp () {
  const navigate = useNavigate()
  const { registerLoading, setAuthType, performSignUp } = useAuthStore()

  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (!data.get('email')) return toast.error('Enter email to proceed!')
    if (!data.get('password')) return toast.error('Enter password to proceed!')

    performSignUp(data.get('email'), data.get('password', navigate))
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='xs'>
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar
            onClick={() => navigate('/')}
            alt='company_logo'
            src='/logo.png'
            sx={{ mr: 1, cursor: 'pointer' }}
          />
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              {registerLoading ? 'Verifying' : 'Sign Up'}
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link
                  href='#'
                  onClick={() => setAuthType('sign-in')}
                  variant='body2'
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
}

function Copyright (props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='/'>
        funjabi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
