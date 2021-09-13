import React from 'react'

import { Box, Paper } from '@material-ui/core'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    flex: '1 0 auto',
    maxWidth: 'calc(100% - 84px)'
  },
  card: {
    height: '100%',
    display:'flex'
  },
}))

const MainSection = (props) => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.root}>
      <Box className={classes.card}>
        {props.children}
      </Box>
    </Paper>
  )
}

export default MainSection
