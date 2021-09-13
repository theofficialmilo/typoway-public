import React, {useState, useEffect} from 'react'
import { useParams, useHistory, Route, Switch, Redirect } from 'react-router-dom';

import {Box, TextField, InputAdornment, Card, Typography, CardHeader, CardContent} from '@material-ui/core'
import {Search} from '@material-ui/icons'

import makeStyles from '@material-ui/core/styles/makeStyles'

import MainSection from '../../components/MainSection' 
import Sidebar from '../../container/Marketplace/Sidebar'
import Dialog from '../../container/Marketplace/Dialog'
import Featured from './Featured'
import ByCategory from './ByCategory';

const useStyles = makeStyles(theme => ({
  sidebar: {
    width: '250px'
  },
  fullWidth: {
    width: '100%',
    padding: theme.spacing(1)
  },
  cardContent: {
    overflowY: 'auto',
    height: 'calc(100% - 16px)'
  }
}))

const Index = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState('Featured');
  const [template, setTemplate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const history = useHistory();

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
        <Sidebar active={selected} handleSelect={handleOnSelect}/>
      </Box>
      <Card className={classes.fullWidth} elevation={0}>
        <CardHeader 
          title={<Typography variant='h5' color='primary' style={{textTransform: 'capitalize'}}>{params.value? params.value: params.type}</Typography>}
        />
        <CardContent className={classes.cardContent}>
          <Switch>
            <Route exact path='/store' render={() => <Redirect to='/store/featured'/>}/>
            <Route exact path='/store/featured' render={(props => <Featured handleOnMore={e => handleOnMore(e)} {...props}/>)} />
            <Route path='/store/category/:value'  render={(props => <ByCategory  handleOnMore={e => handleOnMore(e)} {...props} />)} />
          </Switch>
        </CardContent>
      </Card>
      <Dialog id={template} open={isOpen} handleClose={handleOnClose} handleSave={handleOnSave}/>
    </MainSection>
  )
}

export default Index
