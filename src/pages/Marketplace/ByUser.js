import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import {Avatar, Grid, Typography, Button, IconButton} from '@material-ui/core'
import {ChevronLeft, Facebook, LinkedIn, Instagram, Language} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

import { TemplateCard, SkeletonCard } from '../../components/Marketplace/TemplateCard'
import { getUserData } from '../../service/storeServices';
import { Skeleton } from '@material-ui/lab';
import { setAlertAction } from '../../state/app/appDucks';

const infoWidth = 300;

const useStyles = makeStyles(theme => ({
  avatar: {
    width: 120,
    height: 120,
    marginBottom: theme.spacing(2),
  },
  button: {
    height: 48,
    marginBottom: 8
  },
  infoDiv: {
    width: infoWidth,
    marginTop: '-8px',
    textAlign: 'start',
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

const ByUser = ({location, templates, contributors, handleOnMore}) => {
  const classes = useStyles();
  const {value} = useParams();
  const history = useHistory();
  const dispatch = useDispatch()

  const [user, setUser] = useState({})
  const [filteredList, setFilteredList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(value === undefined || templates ===undefined || contributors === undefined) return;
    setIsLoading(true);
    try {
      (async () => {
        const userData = await getUserData(value);
        const filtered = templates.filter(template => template.account.id === value);
        setUser(userData)
        setFilteredList(filtered);
        setIsLoading(false);
      })();
    }catch(err){
      dispatch(setAlertAction({ type: 'error', message: err.code  }))
    }
  },[location])

  const handleOnBack = () => {
    history.goBack();
  } 

  return (
    <Grid container spacing={2} justifyContent='space-between'>
      <Grid item className={classes.infoDiv}>
        <div style={{position: 'sticky', top: '-8px'}}>
          <Button size="small" color="primary" className={classes.button} startIcon={<ChevronLeft />} onClick={handleOnBack}>
            Return to Store
          </Button>
            <div style={{padding: 8}}>
              <Avatar alt={user.name} src={user.iconUrl} className={classes.avatar}>
                {!isLoading ? user.name.charAt(0): <Skeleton variant='circle'/>}
              </Avatar> 
              <Typography variant='h5' color="textPrimary">{!isLoading ? user.name : <Skeleton width={150}/>}</Typography>
              <Typography variant='body1' color="secondary" paragraph>{!isLoading ? user.location : <Skeleton width={100}/>}</Typography>
              <Typography variant='body1' color="secondary" paragraph>{!isLoading ? user.description : <Skeleton variant='rect' width={250} height={125}/>}</Typography>
              <div>
                {!isLoading && Object.entries(user.socials).map((social, index) => (
                  <IconButton 
                    edge={index === 0 && 'start'} 
                    color='primary'
                    component="a"
                    href={social[1]}
                    target="_blank"
                  >
                    {social[0] === 'linkedin' && <LinkedIn/>}
                    {social[0] === 'instagram' && <Instagram/>}
                    {social[0] === 'facebook' && <Facebook/>}
                    {social[0] === 'web' && <Language/>}
                  </IconButton>
                ))}
              </div>
            </div>
        </div>
      </Grid>
      <Grid item container spacing={2} justifyContent='flex-start' className={classes.listDiv}>
        <Grid item xs={12}>
          <Typography variant='h5' color='primary' style={{textTransform: 'capitalize'}}>templates</Typography>
        </Grid>
        {!isLoading && filteredList ? 
          filteredList.map((data, index) => (
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
            </Grid>)) :
            [...Array(5)].map((_, index) => (
              <Grid item key={index} className={classes.cardDiv} >
                <SkeletonCard />
              </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default ByUser
