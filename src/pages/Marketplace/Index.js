import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Route, Switch, Redirect } from 'react-router-dom';

import {Box, Card, Typography, CardHeader, CardContent} from '@material-ui/core'

import makeStyles from '@material-ui/core/styles/makeStyles'

import MainSection from '../../components/MainSection' 
import Sidebar from '../../container/Marketplace/Sidebar'
import Dialog from '../../container/Marketplace/Dialog'
import Featured from './Featured'
import ByCategory from './ByCategory';
import ByUser from './ByUser';
import { getMarketplaceDataAction } from '../../state/marketplace/marketplaceDucks';

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: '-8px'
  },
  sidebar: {
    width: '250px'
  },
  fullWidth: {
    width: '100%',
    padding: theme.spacing(1)
  },
  cardContent: {
    overflowY: 'auto',
    height: 'calc(100% - 64px)'
  }
}))

const Index = ({...props}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('Featured');
  const [template, setTemplate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const history = useHistory();

  const {isLoading ,templates, contributors} = useSelector(state => state.marketplace)

  useEffect(() => {
    if(templates.length !== 0) return 
      dispatch(getMarketplaceDataAction());
  },[])

  useEffect(() => {
    if(template !== null) setIsOpen(true)
    else setIsOpen(false)
  },[template])

  const handleOnSelect = (e) => {
    setSelected(e.currentTarget.id)
  }

  const handleOnClose = () => {
    setTemplate(null);
  }

  const handleOnUser = (e) => {
    setTemplate(null);
    const id = e.currentTarget.id;
    history.push({
      pathname: `/store/user/${id}`,
    }); 
  } 

  const handleOnMore = (e) => {
    e.preventDefault();
    setTemplate(e.currentTarget.parentNode.id);
  }

  const handleOnSave = () => {
    setIsOpen(false);
    history.push({
      pathname: '/library/editor',
      state: {
        store: template
      }
    });
    setTemplate(null);
  }

  return (
    <MainSection>
      <Box className={classes.sidebar}>
        <Sidebar active={selected} handleSelect={handleOnSelect} />
      </Box>
      <Card className={classes.fullWidth} elevation={0}>
        { params.type!=='user' && 
        <CardHeader 
          title={
          <Typography variant='h5' color='primary' style={{textTransform: 'capitalize'}}>
            {params.value ? params.value: params.type}
          </Typography> 
        }
        />
      }
        <CardContent className={classes.cardContent}>
          <Switch>
            <Route exact path='/store' render={() => <Redirect to='/store/featured'/>}/>
            <Route exact path='/store/featured' render={(props => <Featured handleOnMore={e => handleOnMore(e)} templates={templates} contributors={contributors} isLoading={isLoading} {...props}/>)} />
            <Route path='/store/category/:value'  render={(props => <ByCategory handleOnMore={e => handleOnMore(e)} templates={templates} {...props} />)}  />
            <Route path='/store/user/:value'  render={(props => <ByUser handleOnMore={e => handleOnMore(e)} templates={templates} contributors={contributors} {...props} />)}/>
          </Switch>
        </CardContent>
      </Card>
      <Dialog id={template} open={isOpen} handleClose={handleOnClose} handleSave={handleOnSave} handleUser={handleOnUser}/>
    </MainSection>
  )
}

export default Index
