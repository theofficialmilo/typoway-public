import Skeleton from '@material-ui/lab/Skeleton'
import {IconButton} from '@material-ui/core'

const SkeletonButton = () => {
  return (
    <IconButton edge='start' disabled>
      <Skeleton variant="circle" width={40} height={40}/>
    </IconButton>
  )
}

export default SkeletonButton