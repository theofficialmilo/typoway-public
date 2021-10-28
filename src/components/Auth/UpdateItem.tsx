import { ListItem, Card, CardContent, Typography } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Update } from '../../interfaces/Updates'

const useStyles = makeStyles(theme => ({
  description: {
    paddingTop: theme.spacing(1)
  },
  listDiv: {
    padding: theme.spacing(1)
  },
  card: {
    flex: '0 0 100%'
  }
}))

interface PropsTypes{
  data: Update,
  index: number, 
}

export const UpdateItem = ({ data, index }: PropsTypes) => {
  const classes = useStyles();

  return (
    <ListItem component='div' id={index.toString()} disableGutters>
      <Card variant='outlined' className={classes.card}>
        <CardContent>
          <Typography
            color="primary"
            variant="h5"
            children={data.title}
          />
          <Typography
            className={classes.description}
            color='secondary'
            variant="body1"
            children={data.message}
          />
          {data.features &&
            <div className={classes.listDiv}>
              <Typography color='secondary' variant="h6" children="Features" />
              {data.features.map((feature, index) => (
                <Typography key={index} color='secondary' variant="body1" children={`- ${feature}`} />
              ))}
            </div>
          }
          {data.upcoming &&
            <div className={classes.listDiv}>
              <Typography color='secondary' variant="h6" children="In the works" />
              {data.upcoming.map((upcoming, index) => (
                <Typography key={index} color='secondary' variant="body1" children={`- ${upcoming}`} />
              ))}
            </div>
          }
        </CardContent>
      </Card>
    </ListItem>
  )
}

export const SkeletonUpdate = () => {
  const classes = useStyles();

  return (
    <ListItem component='div' disableGutters>
      <Card variant='outlined' className={classes.card}>
        <CardContent>
          <Typography
            color="primary"
            variant="h5"
            children={<Skeleton />}
          />
          <Typography
            className={classes.description}
            color='secondary'
            variant="body1"
            children={<Skeleton variant='rect' width={'100%'} height={250} />}
          />
        </CardContent>
      </Card>
    </ListItem>
  )
}

export default UpdateItem