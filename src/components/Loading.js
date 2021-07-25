import React from 'react'
import {Box, makeStyles, LinearProgress} from '@material-ui/core'

import Logo from './Logo'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  progressBar: {
    width: '20%',
    marginTop: theme.spacing(6)
  }
}))

const Loading = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
        <Logo />
        <LinearProgress className={classes.progressBar}/>
    </Box>
  )
}

export default Loading
