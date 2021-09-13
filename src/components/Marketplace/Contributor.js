import React from 'react'

import {Box, Typography, Avatar, IconButton} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  avatarRoot: {
    display: 'flex'
  }
}))

const Contributor = ({contributors}) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant='h6' color='primary'>Top Contributors this week!</Typography>
      <div className={classes.avatarRoot}>
        {contributors.map(user => (
          <IconButton edge='start' disabled>
            <Avatar alt={user.name} src={user.iconUrl}>{user.name.charAt(0)}</Avatar>
          </IconButton>
        ))}
      </div>
    </Box>
  )
}

export default Contributor
