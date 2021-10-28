import { CardMedia, Typography, Grid } from '@material-ui/core';
import useEmptyListStyle from '../../styles/Library/EmptyList';

import Empty from '../../assets/drawing.png'

const EmptyList = () => {
  const classes = useEmptyListStyle();
  
  return (
    <Grid item md={12} className={classes.emptyText}>
      <CardMedia
        component="img"
        image={Empty}
        title="Template !"
        className={classes.emptyImg}
      />
      <Typography variant='h5' color='secondary'>
        Oops... Looks like you don't have a saved template here
      </Typography>
      <Typography variant='h6' color='secondary'>
        Click on <b>'Create Template'</b> to start!
      </Typography>
    </Grid>
  )
}

export default EmptyList