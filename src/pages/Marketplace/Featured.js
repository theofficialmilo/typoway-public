import React, {useState, useEffect} from 'react'
import {Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import TemplateCard from '../../components/Marketplace/TemplateCard'
import { getTemplateList, getTopContributors } from '../../service/storeServices';
import Contributor from '../../components/Marketplace/Contributor';

const infoWidth = 340;

const useStyles = makeStyles(theme => ({
  infoDiv: {
    width: infoWidth
  },
  listDiv: {
    overflowY: 'auto',
    width: `calc(100% - ${infoWidth}px)`
  }
}))

const Featured = ({handleOnMore}) => {
  const classes = useStyles();
  const [templates,setTemplates] = useState([]);
  const [contributors, setContributors] = useState([]);
  
  useEffect(() => {
    getTemplateList()
      .then(data => {
        setTemplates(data);
      });
    getTopContributors()
      .then(data => {
        setContributors(data)
      });
    
    return {}
  }, [])

  return (
    <Grid container spacing={2} justifyContent='space-between'>
      <Grid item className={classes.infoDiv}>
        <div style={{position: 'sticky', top: 0}}>
          <Typography variant='h4' paragraph>Unlimited access to Email Designs with a click of a button</Typography>
          <Typography variant='body1' color="secondary" paragraph>Created by designers all over the world, this huge library of template can be used with just a click of a button.<br/> All templates can be use personally or commercially.</Typography>
          <Contributor contributors={contributors}/>
        </div>
      </Grid>
      <Grid item container spacing={2} justifyContent='space-between' className={classes.listDiv}>
        {templates && templates.map((data, index) => (
          <Grid item key={index} style={{flex: '1 0 auto'}}>
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
        ))}
      </Grid>
    </Grid>
  )
}

export default Featured
