import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { history } from '../utils/history';

import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles';

import bgImg from '../assets/illustration-4603960_1920.jpg'
import AuthForm from '../container/Auth/AuthForm';
import News from '../container/Auth/News'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${bgImg})`,
    height: '100vh',
    backgroundSize: 'cover'
  },
  newsDiv: {
    width: '75%',
    margin: 'auto',
    height: '80%'
  }
}))

const Auth = () => {
  const classes = useStyles();
  const isAuth = useSelector((store) => store.user.isAuth)

  useEffect(() => {
    if(isAuth === true) history.push('/')
    return {}
  }, [isAuth])

  return (
    <Grid container component="main" justifyContent="center"alignItems="stretch" className={classes.root} >
      <Grid item md={4}>
        <AuthForm />
      </Grid>
      <Grid item md={6} className={classes.newsDiv}>
        <News />
      </Grid>
    </Grid>
  )
}

export default Auth
