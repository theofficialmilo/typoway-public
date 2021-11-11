import Skeleton from '@material-ui/lab/Skeleton'
import { Link as RouterLink } from 'react-router-dom'

import {Avatar, IconButton, Tooltip} from '@material-ui/core'
import { Contributor } from '../../interfaces/Marketplace'

const AvatarButton = ({user}: PropTypes) => {
  return(
    <Tooltip title={user.name}>
      <IconButton edge='start' component={RouterLink} to={`/store/user/${user.id}`}>
        <Avatar alt={user.name} src={user.iconUrl}>{user.name.charAt(0)}</Avatar> 
      </IconButton>
     </Tooltip>
  ) 
}

export default AvatarButton

interface PropTypes {
  user: Contributor
}