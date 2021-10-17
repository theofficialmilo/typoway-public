import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import { Link as RouterLink } from 'react-router-dom'

import {Box, Typography, Avatar, IconButton, Tooltip} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  avatarRoot: {
    display: 'flex'
  }
}))

const Contributor = ({isLoading, contributors}) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant='h6' color='primary'>Top Contributors this week!</Typography>
      <div className={classes.avatarRoot}>
        {!isLoading ? 
          contributors.map((user,index) => (<AvatarButton user={user} key={index}/>)) :  
          [...Array(5)].map((_, index) => (<SkeletonButton key={index}/>))
        }
      </div>
    </Box>
  )
}

const AvatarButton = ({user}) => {
  return(
    <Tooltip title={user.name}>
      <IconButton edge='start' component={RouterLink} to={`/store/user/${user.id}`}>
        <Avatar alt={user.name} src={user.iconUrl}>{user.name.charAt(0)}</Avatar> 
      </IconButton>
     </Tooltip>
  ) 
}

const SkeletonButton = () => {
  return (
    <IconButton edge='start' disabled>
      <Skeleton variant="circle" width={40} height={40}/>
    </IconButton>
  )
}

export default Contributor
