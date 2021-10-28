import { Card, CardContent, CardActions, Typography, Button, Grid, IconButton } from '@material-ui/core';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton'

import useTemplateCardStyle from '../../styles/Library/TemplateCard';

const TemplateSkeleton = () => {
  const classes = useTemplateCardStyle();

  return (
      <Grid item md={3}>
          <Card className={classes.card} variant='outlined' >
              <CardContent className={classes.cardContent}>
                  <Typography variant='h6'>
                      <Skeleton width={150} />
                  </Typography>
                  <Typography variant='body2' color='secondary'>
                      <Skeleton width={50} />
                  </Typography>
              </CardContent>
              <CardActions disableSpacing>
                  <Button size="small" color="primary" disabled>
                      <Skeleton width={50} />
                  </Button>
                  <Button size="small" color="secondary" disabled>
                      <Skeleton width={50} />
                  </Button>
                  <IconButton className={classes.iconButton} disabled>
                      <MoreVertIcon/>
                  </IconButton>
              </CardActions>
          </Card>
      </Grid>
  )
}

export default TemplateSkeleton;