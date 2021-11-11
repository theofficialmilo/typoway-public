import {Box, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import AvatarButton from './AvatarButton'
import SkeletonButton from './SkeletonButton'

import { Contributor } from '../../interfaces/Marketplace'

const useStyles = makeStyles(theme => ({
  avatarRoot: {
    display: 'flex'
  }
}))

const ContributorComp = ({isLoading, contributors}: PropTypes) => {
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

export default ContributorComp

interface PropTypes {
  isLoading: boolean,
  contributors: Contributor[]
}

