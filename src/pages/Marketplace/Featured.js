import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import { TemplateCard, SkeletonCard } from '../../components/Marketplace/TemplateCard'
import Contributor from '../../components/Marketplace/Contributor';

const infoWidth = 340;

const useStyles = makeStyles(theme => ({
  infoDiv: {
    width: infoWidth
  },
  listDiv: {
    overflowY: 'auto',
    width: `calc(100% - ${infoWidth}px)`
  },
  cardDiv: {
    width: '100%',
    [theme.breakpoints.up(1100)]: {
      width: 'calc(100% / 2)'
    },
    [theme.breakpoints.up(1320)]: {
      width: 'calc(100% / 3)'
    },
    [theme.breakpoints.up(1550)]: {
      width: 'calc(100% / 4)'
    },
    [theme.breakpoints.up(1825)]: {
      width: 'calc(100% / 5)'
    },
  }
}))
 
const Featured = ({isLoading, templates, contributors, handleOnMore}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} justifyContent='space-between'>
      <Grid item className={classes.infoDiv}>
        <div style={{position: 'sticky', top: 0}}>
          <Typography variant='h4' paragraph>Unlimited access to Email Designs with a click of a button</Typography>
          <Typography variant='body1' color="secondary" paragraph>Created by designers all over the world, this huge library of template can be used with just a click of a button.<br/> All templates can be use personally or commercially.</Typography>
          <Contributor contributors={contributors} isLoading={isLoading}/>
        </div>
      </Grid>
      <Grid item container spacing={2} justifyContent='flex-start' className={classes.listDiv}>
        {!isLoading ? 
          templates.map((data, index) => (
            <Grid item key={index} className={classes.cardDiv}>
              <TemplateCard
                id={data.id}
                price={data.price}
                imgUrl={data.imgUrl}
                title={data.title}
                templateType={data.templateType}
                userName={data.account.name}
                handleOnClick={handleOnMore}
            />
            </Grid>
          )) : 
          [...Array(5)].map((_, index) => (
            <Grid item key={index} className={classes.cardDiv} >
              <SkeletonCard />
            </Grid>
          )) 
      }
      </Grid>
    </Grid>
  )
}

export default Featured
