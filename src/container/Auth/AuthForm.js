import React from 'react'
import { useSelector } from 'react-redux'
import { Paper, makeStyles, Typography, Button, Divider, CircularProgress, List, ListItem, ListSubheader, Link } from '@material-ui/core'

import { Link as RouterLink } from 'react-router-dom'

import LogoComp from '../../components/Logo'
import googleLogo from '../../assets/googleLogo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    height: `100%`,
    maxWidth: '100%',
    padding: `0 ${theme.spacing(6)}px`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderRadius: '0 10px 10px 0'
  },
  input: {
    marginBottom: theme.spacing(1)
  },
  formIntro: {
    marginBottom: theme.spacing(4)
  },
  divider: {
    marginBottom: theme.spacing(2)
  },
  button: {
    backgroundColor: '#fafafa'
  },
  linkDiv: {
    display: 'flex'
  },
  linkDivider: {
    margin: '0 8px'
  }
}))

const handleSignUp = () => {
  window.gapi.auth2.getAuthInstance().signIn();
}

const AuthForm = () => {
  const classes = useStyles();

  let isLoading = useSelector((state) => state.app.isLoading)

  return (
    <Paper className={classes.root} elevation={2}>
      <LogoComp size='small' />
      <div>
        <div className={classes.formIntro}>
          <Typography variant='h4' className={classes.divider}>
            Hello Stranger!
          </Typography>
          <Typography variant='h6' color='primary' className={classes.divider}>
            Login Steps:
          </Typography>
          <Typography variant='body1' color="secondary">
            Due to Google’s costly verification process, this app is not yet verified by Google(too expensive to do).<br />
          </Typography>
          <List>
            <ListSubheader disableGutters>
              <Typography variant='body1' color="secondary">
                <b>Therefore, to access this application:</b>
              </Typography>
            </ListSubheader>
            <ListItem>
              <Typography variant='body1' color="secondary">
                1) Click on <b>Advanced</b> link
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant='body1' color="secondary">
                2) Click on <b>Go to typoway.com (unsafe)</b> link
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant='body1' color="secondary">
                3) Check the <b>checkbox</b> and click on <b>continue</b>
              </Typography>
            </ListItem>
          </List>
        </div>
        <Button
          className={classes.button}
          startIcon={!isLoading && (<img src={googleLogo} alt='gIcon' width='24' height='24' />)}
          fullWidth
          variant='contained'
          onClick={handleSignUp}>
          {!isLoading ?
            'Login with Google' :
            (<CircularProgress size={24} />)
          }
        </Button>
      </div>
      <div>
        <Divider variant='fullWidth' className={classes.divider} />
        <Typography variant='body1'>Created by Millenno Kho</Typography>
        <div className={classes.linkDiv}>
          <Link component={RouterLink} to='/privacy-policy' color="secondary" variant='overline'>
            Privacy Policy
          </Link>
          <Divider className={classes.linkDivider} orientation="vertical" flexItem />
          <Link href='https://github.com/theofficialmilo/typoway-public' color="secondary" variant='overline'>
            GitHub Repo
          </Link>
        </div>
      </div>
    </Paper>
  )
}

export default AuthForm
