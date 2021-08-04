import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Card, CardHeader, CardContent, CardActions, Typography, List, IconButton } from '@material-ui/core'
import { Email, LinkedIn, GitHub } from '@material-ui/icons'
import makeStyles from '@material-ui/styles/makeStyles'

import Post from '../../components/Auth/Post'
import { getNewsList } from '../../service/updatesServices'
import { setAlertAction } from '../../state/app/appDucks'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  actionArea: {
    padding: theme.spacing(2)
  },
  actionAreaText: {
    flex: '1 0 auto'
  },
  list: {
    padding: 0
  },
  cardContent: {
    height: 'calc(100% - 140px)',
    overflowY: 'auto'
  }
}))

const News = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  useEffect(() => {
    getNewsList()
      .then(resp => setData(resp))
      .catch(err => dispatch(setAlertAction({ type: 'error', message: err })))
  }, [])

  return (
    <Card className={classes.root}>
      <CardHeader title={
        <Typography color='secondary' variant="h6" children="News & Update" />
      } />
      <CardContent className={classes.cardContent}>
        <List className={classes.list}>
          {data.length !== 0 ?
            data.map((post, index) => (
              <React.Fragment key={index}>
                <Post key={index} data={post} index={index} />
              </React.Fragment>
            )) :
            <Post isLoading={true} index={0} />
          }
        </List>
      </CardContent>
      <CardActions className={classes.actionArea}>
        <Typography color='secondary' variant="h6" className={classes.actionAreaText}>Contact me at:</Typography>
        <IconButton color="primary" href="mailto:millenno.kho@gmail.com" target="_blank">
          <Email />
        </IconButton>
        <IconButton color="primary" href="https://www.linkedin.com/in/millenno-kho-3682181ba/" target="_blank">
          <LinkedIn />
        </IconButton>
        <IconButton color="primary" href="https://github.com/theofficialmilo" target="_blank">
          <GitHub />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default News
