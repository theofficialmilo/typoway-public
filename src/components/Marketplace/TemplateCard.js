import React from 'react'
import {useHistory} from 'react-router-dom'

import { Card, CardMedia, CardContent, CardActionArea, CardActions, Button, Typography } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { templateTypeData } from '../../utils/data';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  media: {
    height: 275,
    backgroundSize: 'cover',
    backgroundPosition: 'top'
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export const TemplateCard = ({id, imgUrl, price, title, userName, templateType, handleOnClick}) => {
  const classes = useStyles();
  const history = useHistory();
  const templateData = templateTypeData();

  const handleOnSave = () => {
    history.push({
      pathname: '/library/editor',
      state: {
        store: id
      }
  });
  }

  return (
    <Card id={id} className={classes.root}>
      <CardActionArea onClick={handleOnClick}>
        {<CardMedia className={classes.media} image={imgUrl} title={title}/>}
        <CardContent>
          <div className={classes.cardHeader}>
            <Typography variant="h6">
              {title}
            </Typography>
            <Typography variant="h6" color="secondary">
              {price === 0 ?  'Free' : `$${price}`}
            </Typography>
          </div>
          <div className={classes.cardHeader}>
          <Typography variant="body2" color="secondary" noWrap>
              {userName}
            </Typography>
          <Typography variant="body2" color="secondary" style={{textTransform: 'capitalize',paddingLeft: '12px'}}>
              {templateData[templateType]}
            </Typography>  
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          color='primary' 
          variant='contained' 
          fullWidth 
          onClick={handleOnSave}
        >
          Save to Library
        </Button>
      </CardActions>
    </Card>
  )
}

export const SkeletonCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea disabled>
        {<Skeleton className={classes.media} variant="rect" />}
        <CardContent>
          <div className={classes.cardHeader}>
            <Typography variant="h6">
              {(<Skeleton width={100}/>)}
            </Typography>
            <Typography variant="h6" color="secondary">
              {<Skeleton width={50}/>}
            </Typography>
          </div>
          <div className={classes.cardHeader}>
          <Typography variant="body2" color="secondary">
              {<Skeleton width={65}/>}
            </Typography>
          <Typography variant="body2" color="secondary">
              {<Skeleton width={85}/>}
            </Typography>  
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          disabled
          color='primary' 
          variant='contained' 
          fullWidth 
        >
          Save to Library
        </Button>
      </CardActions>
    </Card>
  )
}

export default TemplateCard
