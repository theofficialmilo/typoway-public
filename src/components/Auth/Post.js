import React from 'react'

import { ListItem, Card, CardContent, Typography } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import makeStyles from '@material-ui/styles/makeStyles'

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

const Post = ({ data, index, isLoading }) => {
  const classes = useStyles();

  return (
    <ListItem component='div' id={index} key={index} disableGutters>
      <Card variant='outlined' className={classes.card}>
        <CardContent>
          <Typography
            color="primary"
            variant="h5"
            children={!isLoading ? data.title : <Skeleton />}
          />
          <Typography
            className={classes.description}
            color='secondary'
            variant="body1"
            children={!isLoading ? data.message : <Skeleton variant='rect' width={'100%'} height={250} />}
          />
          {!isLoading &&
            <>
              {data.features &&
                <div className={classes.listDiv}>
                  <Typography color='secondary' variant="h6" children="Features" />
                  {data.features.map((feature, index) => (
                    <Typography color='secondary' variant="body1" children={`- ${feature}`} />
                  ))}
                </div>
              }
              {data.upcoming &&
                <div className={classes.listDiv}>
                  <Typography color='secondary' variant="h6" children="In the works" />
                  {data.upcoming.map((upcoming, index) => (
                    <Typography color='secondary' variant="body1" children={`- ${upcoming}`} />
                  ))}
                </div>
              }
            </>
          }
        </CardContent>
      </Card>
    </ListItem>
  )
}


export default Post
